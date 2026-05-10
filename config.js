// ============================================
// دوال التعامل مع Airtable API
// ============================================

const AirtableAPI = {
  // بناء URL الأساسي
  baseUrl() {
    return `https://api.airtable.com/v0/${CONFIG.AIRTABLE.BASE_ID}/${encodeURIComponent(CONFIG.AIRTABLE.TABLE_NAME)}`;
  },

  // الـ Headers الأساسية
  headers() {
    return {
      'Authorization': `Bearer ${CONFIG.AIRTABLE.TOKEN}`,
      'Content-Type': 'application/json'
    };
  },

  // ========================================
  // إنشاء طلب جديد
  // ========================================
  async createOrder(order) {
    try {
      const response = await fetch(this.baseUrl(), {
        method: 'POST',
        headers: this.headers(),
        body: JSON.stringify({
          fields: {
            OrderID: order.id,
            CustomerName: order.customerName,
            CustomerPhone: order.customerPhone,
            CustomerAddress: order.customerAddress,
            ItemsSummary: order.itemsSummary,
            ItemsJSON: JSON.stringify(order.items),
            Total: order.total,
            Status: order.status,
            Notes: order.customerNotes || ''
          }
        })
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || `HTTP ${response.status}`);
      }

      const data = await response.json();
      return { success: true, recordId: data.id, data };
    } catch (error) {
      console.error('خطأ في إنشاء الطلب:', error);
      return { success: false, error: error.message };
    }
  },

  // ========================================
  // جلب كل الطلبات
  // ========================================
  async getOrders() {
    try {
      const allRecords = [];
      let offset = null;

      // Airtable يرجع 100 سجل في كل طلب، نستخدم pagination للكل
      do {
        const url = new URL(this.baseUrl());
        url.searchParams.set('sort[0][field]', 'CreatedAt');
        url.searchParams.set('sort[0][direction]', 'desc');
        url.searchParams.set('pageSize', '100');
        if (offset) url.searchParams.set('offset', offset);

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: this.headers()
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        allRecords.push(...data.records);
        offset = data.offset || null;
      } while (offset);

      // تحويل سجلات Airtable لصيغة التطبيق
      const orders = allRecords.map(record => {
        let items = [];
        try {
          items = JSON.parse(record.fields.ItemsJSON || '[]');
        } catch (e) {
          items = [];
        }

        return {
          recordId: record.id,
          id: record.fields.OrderID || record.id,
          customerName: record.fields.CustomerName || 'غير معروف',
          customerPhone: record.fields.CustomerPhone || '',
          customerAddress: record.fields.CustomerAddress || '',
          customerNotes: record.fields.Notes || '',
          items: items,
          itemsSummary: record.fields.ItemsSummary || '',
          total: record.fields.Total || 0,
          status: record.fields.Status || 'جديد',
          createdAt: record.fields.CreatedAt || record.createdTime
        };
      });

      return { success: true, orders };
    } catch (error) {
      console.error('خطأ في جلب الطلبات:', error);
      return { success: false, error: error.message, orders: [] };
    }
  },

  // ========================================
  // تحديث حالة طلب
  // ========================================
  async updateOrderStatus(recordId, newStatus) {
    try {
      const response = await fetch(`${this.baseUrl()}/${recordId}`, {
        method: 'PATCH',
        headers: this.headers(),
        body: JSON.stringify({
          fields: { Status: newStatus }
        })
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || `HTTP ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error('خطأ في تحديث الحالة:', error);
      return { success: false, error: error.message };
    }
  },

  // ========================================
  // حذف طلب
  // ========================================
  async deleteOrder(recordId) {
    try {
      const response = await fetch(`${this.baseUrl()}/${recordId}`, {
        method: 'DELETE',
        headers: this.headers()
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || `HTTP ${response.status}`);
      }

      return { success: true };
    } catch (error) {
      console.error('خطأ في حذف الطلب:', error);
      return { success: false, error: error.message };
    }
  },

  // ========================================
  // حذف كل الطلبات (للاختبار)
  // ========================================
  async deleteAllOrders() {
    try {
      const result = await this.getOrders();
      if (!result.success) throw new Error(result.error);

      const recordIds = result.orders.map(o => o.recordId);
      if (recordIds.length === 0) {
        return { success: true, count: 0 };
      }

      // Airtable يسمح بحذف 10 سجلات في كل طلب
      let deleted = 0;
      for (let i = 0; i < recordIds.length; i += 10) {
        const batch = recordIds.slice(i, i + 10);
        const url = new URL(this.baseUrl());
        batch.forEach(id => url.searchParams.append('records[]', id));

        const response = await fetch(url.toString(), {
          method: 'DELETE',
          headers: this.headers()
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error?.message || `HTTP ${response.status}`);
        }

        const data = await response.json();
        deleted += data.records.length;
      }

      return { success: true, count: deleted };
    } catch (error) {
      console.error('خطأ في حذف كل الطلبات:', error);
      return { success: false, error: error.message };
    }
  }
};
