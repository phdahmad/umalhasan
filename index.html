<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>أم حسن للأكلات الشعبية</title>
<link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Tajawal:wght@300;400;500;700;900&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Tajawal', sans-serif; }
  body { background: linear-gradient(135deg, #FBF6EC 0%, #F5E6CC 100%); min-height: 100vh; color: #3D1F0A; }
  .font-display { font-family: 'Amiri', serif; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes spin { to { transform: rotate(360deg); } }
  .fade-up { animation: fadeUp 0.6s ease-out backwards; }
  .ornament { background-image: radial-gradient(circle, #B8860B 1px, transparent 1px); background-size: 12px 12px; height: 8px; }

  .spinner { width: 40px; height: 40px; border: 4px solid #F5E6CC; border-top-color: #5C2C0C; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto; }
  .loading-state { text-align: center; padding: 60px 20px; }
  .loading-state p { margin-top: 16px; color: #8B4513; }

  .toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); background: #3D1F0A; color: #FBF6EC; padding: 14px 28px; border-radius: 12px; font-weight: 500; box-shadow: 0 8px 24px rgba(0,0,0,0.3); z-index: 100; animation: fadeUp 0.3s ease-out; }
  .toast.error { background: #991B1B; }
  .toast.success { background: #15803D; }

  header { position: sticky; top: 0; z-index: 40; backdrop-filter: blur(12px); background: rgba(251, 246, 236, 0.85); border-bottom: 2px solid #B8860B; }
  .header-inner { max-width: 1200px; margin: 0 auto; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; }
  .logo { display: flex; align-items: center; gap: 12px; cursor: pointer; background: none; border: none; }
  .logo-icon { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #8B4513, #654321); display: flex; align-items: center; justify-content: center; color: #F5E6CC; font-size: 22px; box-shadow: 0 2px 8px rgba(0,0,0,0.15); transition: transform 0.2s; }
  .logo:hover .logo-icon { transform: scale(1.05); }
  .logo h1 { font-family: 'Amiri', serif; font-size: 24px; color: #5C2C0C; }
  .logo p { font-size: 11px; color: #8B4513; }

  nav { display: flex; align-items: center; gap: 8px; }
  .nav-btn { padding: 8px 16px; border-radius: 8px; font-weight: 500; border: none; cursor: pointer; transition: all 0.2s; background: transparent; color: #5C2C0C; font-size: 15px; display: flex; align-items: center; gap: 6px; position: relative; font-family: 'Tajawal', sans-serif; }
  .nav-btn:hover { background: #F5E6CC; }
  .nav-btn.active { background: #5C2C0C; color: #FBF6EC; }
  .cart-badge { position: absolute; top: -4px; left: -4px; background: #B8860B; color: white; width: 22px; height: 22px; border-radius: 50%; font-size: 11px; font-weight: bold; display: flex; align-items: center; justify-content: center; }

  main { max-width: 1200px; margin: 0 auto; padding: 40px 20px; min-height: 60vh; }
  .hero { text-align: center; margin-bottom: 60px; }
  .hero-tag { letter-spacing: 0.3em; color: #B8860B; font-size: 13px; font-weight: 500; }
  .hero h2 { font-family: 'Amiri', serif; font-size: clamp(36px, 6vw, 70px); color: #3D1F0A; line-height: 1.2; margin: 24px 0; }
  .hero h2 span { color: #B8860B; }
  .hero p { max-width: 640px; margin: 0 auto; color: #654321; line-height: 1.8; font-size: 17px; }

  .section-title { display: flex; justify-content: space-between; align-items: end; margin-bottom: 32px; }
  .section-title h3 { font-family: 'Amiri', serif; font-size: 30px; color: #3D1F0A; }
  .section-title p { color: #8B4513; font-size: 14px; margin-top: 4px; }

  .dishes-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; }
  .dish-card { background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); transition: all 0.3s; display: flex; flex-direction: column; }
  .dish-card:hover { box-shadow: 0 12px 24px rgba(0,0,0,0.12); transform: translateY(-2px); }
  .dish-img-wrap { height: 220px; position: relative; overflow: hidden; }
  .dish-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
  .dish-card:hover .dish-img { transform: scale(1.08); }
  .dish-img-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 80px; }
  .dish-time { position: absolute; top: 12px; left: 12px; background: rgba(251, 246, 236, 0.95); backdrop-filter: blur(8px); padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; color: #5C2C0C; }

  .dish-content { padding: 24px; flex: 1; display: flex; flex-direction: column; }
  .dish-head { display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px; }
  .dish-head h4 { font-family: 'Amiri', serif; font-size: 24px; color: #3D1F0A; }
  .dish-head .name-en { font-size: 11px; opacity: 0.6; color: #8B4513; letter-spacing: 1px; }
  .dish-price { text-align: left; }
  .dish-price .num { font-size: 26px; font-weight: bold; color: #B8860B; }
  .dish-price .unit { font-size: 12px; color: #8B4513; }
  .dish-desc { color: #654321; line-height: 1.7; font-size: 14px; margin-bottom: 20px; flex: 1; }

  .btn { width: 100%; padding: 12px; border-radius: 10px; border: none; cursor: pointer; font-weight: bold; font-size: 15px; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Tajawal', sans-serif; }
  .btn-primary { background: #5C2C0C; color: #FBF6EC; }
  .btn-primary:hover:not(:disabled) { background: #3D1F0A; transform: scale(1.02); }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .btn-gold { background: #B8860B; color: #FBF6EC; padding: 16px; font-size: 17px; }
  .btn-gold:hover:not(:disabled) { background: #946A09; transform: scale(1.01); }
  .btn-gold:disabled { opacity: 0.6; cursor: not-allowed; }
  .btn-spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spin 0.8s linear infinite; display: inline-block; }

  .qty-control { display: flex; align-items: center; justify-content: space-between; padding: 8px; background: #F5E6CC; border-radius: 10px; }
  .qty-btn { width: 36px; height: 36px; border-radius: 8px; border: none; cursor: pointer; background: #5C2C0C; color: #FBF6EC; font-size: 18px; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: transform 0.15s; }
  .qty-btn:hover { transform: scale(1.1); }
  .qty-num { font-size: 20px; font-weight: bold; color: #3D1F0A; }

  .quote-section { margin-top: 80px; padding: 48px 32px; border-radius: 20px; background: linear-gradient(135deg, #5C2C0C, #3D1F0A); text-align: center; color: #F5E6CC; }
  .quote-section p { font-family: 'Amiri', serif; font-size: 22px; line-height: 1.8; margin-bottom: 16px; }

  .empty-cart { text-align: center; padding: 80px 20px; }
  .empty-cart-icon { width: 96px; height: 96px; margin: 0 auto 24px; background: #F5E6CC; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; }
  .empty-cart h2 { font-family: 'Amiri', serif; font-size: 30px; color: #3D1F0A; margin-bottom: 12px; }
  .empty-cart p { color: #654321; margin-bottom: 24px; }

  .back-btn { display: inline-flex; align-items: center; gap: 6px; color: #8B4513; background: none; border: none; cursor: pointer; font-size: 14px; margin-bottom: 20px; font-family: 'Tajawal'; }
  .back-btn:hover { gap: 10px; }

  .cart-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; }
  @media (max-width: 768px) { .cart-grid { grid-template-columns: 1fr; } }

  .cart-item { background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 16px; margin-bottom: 12px; }
  .cart-item-img { width: 64px; height: 64px; border-radius: 10px; object-fit: cover; flex-shrink: 0; }
  .cart-item-img-fallback { width: 64px; height: 64px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; flex-shrink: 0; background: linear-gradient(135deg, #8B4513, #654321); }
  .cart-item-info { flex: 1; }
  .cart-item-info h4 { font-family: 'Amiri', serif; font-size: 18px; color: #3D1F0A; }
  .cart-item-info p { font-size: 13px; color: #B8860B; }
  .cart-item-controls { display: flex; align-items: center; gap: 6px; }
  .small-qty-btn { width: 32px; height: 32px; border-radius: 8px; border: none; background: #F5E6CC; color: #5C2C0C; cursor: pointer; font-weight: bold; display: flex; align-items: center; justify-content: center; }
  .small-qty-btn.danger { background: #FEE2E2; color: #991B1B; margin-right: 8px; }

  .form-section { background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 12px; padding: 24px; margin-top: 16px; }
  .form-section h3 { font-family: 'Amiri', serif; font-size: 22px; color: #3D1F0A; margin-bottom: 16px; }
  .field { margin-bottom: 16px; }
  .field label { display: block; font-size: 13px; font-weight: 500; color: #5C2C0C; margin-bottom: 6px; }
  .field input, .field textarea { width: 100%; padding: 12px; padding-right: 40px; border-radius: 8px; border: 2px solid #E8D5B7; background: white; color: #3D1F0A; font-size: 14px; font-family: 'Tajawal', sans-serif; transition: border-color 0.2s; }
  .field input:focus, .field textarea:focus { outline: none; border-color: #B8860B; }
  .field.error input, .field.error textarea { border-color: #DC2626; }
  .field-err { color: #DC2626; font-size: 12px; margin-top: 4px; }
  .field-wrap { position: relative; }
  .field-icon { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); color: #8B4513; font-size: 16px; pointer-events: none; }

  .summary { position: sticky; top: 96px; background: linear-gradient(135deg, #5C2C0C, #3D1F0A); color: #FBF6EC; border-radius: 12px; padding: 24px; }
  .summary h3 { font-family: 'Amiri', serif; font-size: 22px; margin-bottom: 16px; }
  .summary-line { display: flex; justify-content: space-between; padding: 6px 0; font-size: 14px; }
  .summary-divider { border-bottom: 1px solid rgba(245, 230, 204, 0.2); margin: 12px 0; padding-bottom: 12px; }
  .summary-total { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
  .summary-total .label { font-size: 17px; }
  .summary-total .amount { font-family: 'Amiri', serif; font-size: 32px; font-weight: bold; color: #FFD700; }
  .summary-note { font-size: 11px; opacity: 0.7; text-align: center; margin-top: 16px; }

  .confirm-icon-wrap { width: 80px; height: 80px; margin: 0 auto 16px; background: #D4F4DD; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #15803D; font-size: 40px; }
  .confirm-head { text-align: center; margin-bottom: 40px; }
  .confirm-head h2 { font-family: 'Amiri', serif; font-size: 36px; color: #3D1F0A; margin-bottom: 8px; }
  .confirm-head .order-id { color: #654321; }
  .confirm-head .order-id strong { color: #B8860B; }

  .step-card { border-radius: 16px; padding: 24px; margin-bottom: 16px; }
  .step-dark { background: linear-gradient(135deg, #5C2C0C, #3D1F0A); color: #FBF6EC; }
  .step-light { background: #FBF6EC; border: 2px solid #E8D5B7; }
  .step-head { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
  .step-num { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }
  .step-dark .step-num { background: #B8860B; color: white; }
  .step-light .step-num { background: #5C2C0C; color: #FBF6EC; }
  .step-head h3 { font-family: 'Amiri', serif; font-size: 22px; }
  .step-light .step-head h3 { color: #3D1F0A; }

  .bank-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(245, 230, 204, 0.2); }
  .bank-row:last-child { border: none; }
  .bank-row .lbl { font-size: 13px; opacity: 0.7; }
  .bank-row .val { display: flex; align-items: center; gap: 8px; }
  .bank-row .val span { font-family: 'Courier New', monospace; font-weight: 500; direction: ltr; }
  .copy-btn { width: 32px; height: 32px; border-radius: 8px; border: none; cursor: pointer; background: rgba(184, 134, 11, 0.3); color: white; }
  .copy-btn.copied { background: #15803D; }

  .amount-box { border-radius: 12px; padding: 16px; text-align: center; background: rgba(184, 134, 11, 0.2); border: 2px dashed #B8860B; margin-top: 24px; }
  .amount-box .lbl { font-size: 13px; opacity: 0.8; margin-bottom: 4px; }
  .amount-box .amt { font-family: 'Amiri', serif; font-size: 40px; font-weight: bold; color: #FFD700; }

  .login-box { max-width: 400px; margin: 80px auto; padding: 40px; background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 16px; }
  .login-box .lock-icon { width: 64px; height: 64px; background: #5C2C0C; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; color: #FBF6EC; font-size: 28px; }
  .login-box h2 { font-family: 'Amiri', serif; font-size: 26px; color: #3D1F0A; text-align: center; margin-bottom: 4px; }
  .login-box .sub { font-size: 13px; color: #8B4513; text-align: center; margin-bottom: 20px; }
  .login-box input { width: 100%; padding: 12px; text-align: center; border: 2px solid #E8D5B7; border-radius: 10px; font-size: 16px; margin-bottom: 12px; font-family: 'Tajawal'; }
  .login-box input:focus { outline: none; border-color: #B8860B; }
  .login-box .err { color: #DC2626; font-size: 13px; text-align: center; margin-bottom: 12px; }
  .login-box .hint { font-size: 11px; opacity: 0.6; text-align: center; margin-top: 16px; color: #5C2C0C; }

  .admin-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 12px; }
  .admin-head h2 { font-family: 'Amiri', serif; font-size: 36px; color: #3D1F0A; }
  .admin-head p { color: #8B4513; }
  .admin-actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .icon-btn { padding: 10px 16px; border-radius: 10px; border: 2px solid #E8D5B7; background: #FBF6EC; color: #5C2C0C; cursor: pointer; font-family: 'Tajawal'; font-weight: 500; display: flex; align-items: center; gap: 6px; }
  .icon-btn:hover { background: #F5E6CC; }
  .icon-btn.danger { color: #991B1B; border-color: #FCA5A5; }
  .icon-btn.danger:hover { background: #FEE2E2; }

  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px; margin-bottom: 32px; }
  .stat-card { background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 12px; padding: 16px; }
  .stat-card .top { display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; margin-bottom: 8px; }
  .stat-card .val { font-family: 'Amiri', serif; font-size: 24px; font-weight: bold; color: #3D1F0A; }

  .filters { display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 8px; }
  .filter-btn { padding: 8px 16px; border-radius: 8px; border: 2px solid #E8D5B7; background: #FBF6EC; color: #5C2C0C; font-weight: 500; cursor: pointer; white-space: nowrap; font-family: 'Tajawal'; }
  .filter-btn.active { background: #5C2C0C; color: #FBF6EC; border-color: #5C2C0C; }

  .order-card { background: #FBF6EC; border: 2px solid #E8D5B7; border-radius: 12px; padding: 20px; margin-bottom: 16px; }
  .order-top { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
  .order-customer { font-family: 'Amiri', serif; font-size: 20px; color: #3D1F0A; display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
  .status-pill { padding: 4px 12px; border-radius: 20px; font-size: 11px; font-weight: bold; }
  .order-meta { font-size: 13px; color: #8B4513; margin-top: 4px; }
  .order-total { text-align: left; }
  .order-total .amt { font-family: 'Amiri', serif; font-size: 24px; font-weight: bold; color: #B8860B; }
  .order-total .count { font-size: 12px; color: #8B4513; }
  .order-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 12px; font-size: 14px; color: #5C2C0C; }
  .order-info-grid > div { display: flex; align-items: center; gap: 8px; }
  .toggle-details { background: none; border: none; color: #B8860B; font-size: 14px; font-weight: 500; cursor: pointer; font-family: 'Tajawal'; }

  .details { margin-top: 16px; padding-top: 16px; border-top: 1px solid #E8D5B7; }
  .details h5 { font-weight: bold; color: #3D1F0A; margin-bottom: 8px; }
  .item-line { display: flex; justify-content: space-between; padding: 8px 12px; background: #F5E6CC; border-radius: 8px; margin-bottom: 6px; font-size: 14px; }
  .item-line .sub { font-weight: bold; color: #B8860B; }
  .notes-box { padding: 12px; border-radius: 8px; background: #FEF3C7; margin: 12px 0; }
  .notes-box .lbl { font-size: 11px; font-weight: bold; color: #92400E; margin-bottom: 4px; }
  .status-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
  .status-btn { padding: 6px 12px; border-radius: 8px; border: none; font-size: 12px; font-weight: bold; cursor: pointer; font-family: 'Tajawal'; }
  .delete-btn { background: #FEE2E2; color: #991B1B; margin-right: auto; }

  .error-banner { background: #FEE2E2; color: #991B1B; padding: 16px; border-radius: 12px; margin-bottom: 16px; border: 2px solid #FCA5A5; }
  .error-banner strong { display: block; margin-bottom: 4px; }

  footer { margin-top: 80px; padding: 40px 20px; text-align: center; background: #3D1F0A; color: #F5E6CC; }
  footer .name { font-family: 'Amiri', serif; font-size: 24px; font-weight: bold; margin-bottom: 6px; }
  footer .tag { font-size: 13px; opacity: 0.7; margin-bottom: 16px; }
  footer .copy { font-size: 11px; opacity: 0.5; }

  .hidden { display: none !important; }
  .ornament-wrap { display: flex; justify-content: center; margin: 16px 0; }
  .ornament-sm { width: 96px; opacity: 0.4; }
</style>
</head>
<body>

<header>
  <div class="header-inner">
    <button class="logo" onclick="navigate('home')">
      <div class="logo-icon">👨‍🍳</div>
      <div>
        <h1>أم حسن</h1>
        <p>أكلات شعبية أصيلة</p>
      </div>
    </button>
    <nav>
      <button class="nav-btn" id="nav-home" onclick="navigate('home')">القائمة</button>
      <button class="nav-btn" id="nav-cart" onclick="navigate('cart')">
        🛒 <span>السلة</span>
        <span class="cart-badge hidden" id="cart-badge">0</span>
      </button>
      <button class="nav-btn" onclick="goAdmin()" title="لوحة المسؤول">🔒</button>
    </nav>
  </div>
</header>

<main id="app"></main>

<footer>
  <div class="ornament-wrap"><div class="ornament ornament-sm"></div></div>
  <div class="name">أم حسن للأكلات الشعبية</div>
  <div class="tag">نطبخ بحب • نوصل بأمانة</div>
  <div class="copy">© 2026 جميع الحقوق محفوظة</div>
</footer>

<script src="config.js"></script>
<script src="airtable.js"></script>
<script>
const dishes = [
  { id: 'jareesh', name: 'جريش', nameEn: 'Jareesh', description: 'قمح مجروش مطبوخ مع اللحم والبصل والبهارات الخاصة، طبق نجدي أصيل', price: 45, emoji: '🍲', color: 'linear-gradient(135deg, #8B4513, #654321)', prepTime: '٣ ساعات', image: 'images/jareesh.svg' },
  { id: 'marqooq', name: 'مرقوق', nameEn: 'Marqooq', description: 'عجين رقيق مطبوخ مع مرق اللحم والخضار، وجبة دافئة تجمع العائلة', price: 55, emoji: '🥘', color: 'linear-gradient(135deg, #A0522D, #6B3410)', prepTime: '٤ ساعات', image: 'images/marqooq.svg' },
  { id: 'areekah', name: 'عريكة', nameEn: 'Areekah', description: 'خبز مفتت مع التمر والسمن البلدي والعسل، حلى أصيل من الجنوب', price: 40, emoji: '🍯', color: 'linear-gradient(135deg, #B8860B, #8B6508)', prepTime: '١ ساعة', image: 'images/areekah.svg' },
  { id: 'masabeeb', name: 'مصابيب', nameEn: 'Masabeeb', description: 'فطائر رقيقة مع العسل والسمن، تذوب في الفم، طبق جنوبي أصيل', price: 35, emoji: '🥞', color: 'linear-gradient(135deg, #CD853F, #8B4513)', prepTime: '٢ ساعة', image: 'images/masabeeb.svg' }
];

const STATUS_COLORS = {
  'جديد': { bg: '#FEF3C7', text: '#92400E' },
  'قيد التحضير': { bg: '#DBEAFE', text: '#1E40AF' },
  'جاهز': { bg: '#D1FAE5', text: '#065F46' },
  'تم التسليم': { bg: '#E5E7EB', text: '#374151' }
};

let state = {
  page: 'home', cart: {}, orders: [], lastOrder: null,
  adminAuthed: false, filter: 'all', expandedOrders: new Set(),
  loading: false, submitting: false, error: null
};

function showToast(msg, type = 'info') {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

function navigate(page) {
  state.page = page;
  state.error = null;
  render();
  window.scrollTo(0, 0);
  if (page === 'admin' && state.adminAuthed) loadOrders();
}

function goAdmin() {
  if (state.adminAuthed) navigate('admin');
  else navigate('admin-login');
}

function addToCart(id) { state.cart[id] = (state.cart[id] || 0) + 1; render(); }
function updateQty(id, delta) {
  const newQty = (state.cart[id] || 0) + delta;
  if (newQty <= 0) delete state.cart[id]; else state.cart[id] = newQty;
  render();
}
function removeFromCart(id) { delete state.cart[id]; render(); }
function cartCount() { return Object.values(state.cart).reduce((s, n) => s + n, 0); }
function cartTotal() {
  return Object.entries(state.cart).reduce((s, [id, qty]) => {
    const d = dishes.find(x => x.id === id);
    return s + (d ? d.price * qty : 0);
  }, 0);
}

async function loadOrders() {
  state.loading = true;
  state.error = null;
  render();
  const result = await AirtableAPI.getOrders();
  state.loading = false;
  if (result.success) state.orders = result.orders;
  else { state.error = result.error; state.orders = []; }
  render();
}

function render() {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (state.page === 'home') document.getElementById('nav-home').classList.add('active');
  if (state.page === 'cart') document.getElementById('nav-cart').classList.add('active');
  const badge = document.getElementById('cart-badge');
  const cnt = cartCount();
  if (cnt > 0) { badge.classList.remove('hidden'); badge.textContent = cnt; }
  else badge.classList.add('hidden');
  const app = document.getElementById('app');
  if (state.page === 'home') app.innerHTML = renderHome();
  else if (state.page === 'cart') app.innerHTML = renderCart();
  else if (state.page === 'confirmation') app.innerHTML = renderConfirmation();
  else if (state.page === 'admin-login') app.innerHTML = renderAdminLogin();
  else if (state.page === 'admin' && state.adminAuthed) app.innerHTML = renderAdmin();
}

function renderHome() {
  const cards = dishes.map((d, i) => {
    const qty = state.cart[d.id] || 0;
    const imgEl = d.image
      ? `<img src="${d.image}" alt="${d.name}" class="dish-img" onerror="this.parentElement.innerHTML='<div class=\\'dish-img-fallback\\' style=\\'background:${d.color}\\'>${d.emoji}</div><div class=\\'dish-time\\'>⏱ ${d.prepTime}</div>'">`
      : `<div class="dish-img-fallback" style="background:${d.color}">${d.emoji}</div>`;
    const action = qty === 0
      ? `<button class="btn btn-primary" onclick="addToCart('${d.id}')">➕ أضف للسلة</button>`
      : `<div class="qty-control"><button class="qty-btn" onclick="updateQty('${d.id}', -1)">−</button><span class="qty-num">${qty}</span><button class="qty-btn" onclick="updateQty('${d.id}', 1)">+</button></div>`;
    return `<div class="dish-card fade-up" style="animation-delay:${i*0.1}s"><div class="dish-img-wrap">${imgEl}<div class="dish-time">⏱ ${d.prepTime}</div></div><div class="dish-content"><div class="dish-head"><div><h4>${d.name}</h4><div class="name-en">${d.nameEn}</div></div><div class="dish-price"><div class="num">${d.price}</div><div class="unit">ريال</div></div></div><p class="dish-desc">${d.description}</p>${action}</div></div>`;
  }).join('');

  return `
    <section class="hero fade-up">
      <div class="ornament-wrap"><div class="ornament ornament-sm"></div></div>
      <div class="hero-tag">أصالة • جودة • محبة</div>
      <div class="ornament-wrap"><div class="ornament ornament-sm"></div></div>
      <h2>نكهات تراثنا<br><span>على مائدتك</span></h2>
      <p>أكلات شعبية سعودية أصيلة، نطبخها بأيدينا في بيتنا، بنفس الوصفات اللي توارثناها من جداتنا. كل طبق يحكي قصة، وكل لقمة تذكّرك بدفء الديرة.</p>
    </section>
    <section>
      <div class="section-title"><div><h3>قائمة اليوم</h3><p>اختر طبقك المفضل</p></div></div>
      <div class="dishes-grid">${cards}</div>
    </section>
    <section class="quote-section">
      <p>"الأكل الشعبي مو بس طعام... هو ذكريات، وروائح، وحكايات الديرة"</p>
      <div class="ornament-wrap"><div class="ornament ornament-sm"></div></div>
    </section>
  `;
}

function renderCart() {
  const items = Object.entries(state.cart).map(([id, qty]) => ({ ...dishes.find(d => d.id === id), quantity: qty }));
  if (items.length === 0) {
    return `<div class="empty-cart fade-up"><div class="empty-cart-icon">🛒</div><h2>سلتك فاضية</h2><p>تعال شوف قائمة اليوم وأطلب اللي يشتهيك</p><button class="btn btn-primary" style="max-width:240px;margin:0 auto" onclick="navigate('home')">تصفح القائمة</button></div>`;
  }
  const itemRows = items.map(item => {
    const imgEl = item.image
      ? `<img src="${item.image}" class="cart-item-img" alt="${item.name}" onerror="this.outerHTML='<div class=\\'cart-item-img-fallback\\' style=\\'background:${item.color}\\'>${item.emoji}</div>'">`
      : `<div class="cart-item-img-fallback" style="background:${item.color}">${item.emoji}</div>`;
    return `<div class="cart-item">${imgEl}<div class="cart-item-info"><h4>${item.name}</h4><p>${item.price} ريال × ${item.quantity}</p></div><div class="cart-item-controls"><button class="small-qty-btn" onclick="updateQty('${item.id}', -1)">−</button><span style="font-weight:bold;width:24px;text-align:center">${item.quantity}</span><button class="small-qty-btn" onclick="updateQty('${item.id}', 1)">+</button><button class="small-qty-btn danger" onclick="removeFromCart('${item.id}')">🗑</button></div></div>`;
  }).join('');
  const summaryLines = items.map(i => `<div class="summary-line"><span>${i.name} × ${i.quantity}</span><span>${i.price * i.quantity} ر.س</span></div>`).join('');
  const submitBtn = state.submitting
    ? `<button class="btn btn-gold" disabled><span class="btn-spinner"></span> جاري الإرسال...</button>`
    : `<button class="btn btn-gold" onclick="submitOrder()">تأكيد الطلب</button>`;

  return `
    <button class="back-btn" onclick="navigate('home')">→ الرجوع للقائمة</button>
    <h2 style="font-family:'Amiri',serif;font-size:36px;color:#3D1F0A">سلة الطلبات</h2>
    <p style="color:#8B4513;margin-bottom:24px">راجع طلبك وأدخل بياناتك</p>
    <div class="cart-grid fade-up">
      <div>
        ${itemRows}
        <div class="form-section">
          <h3>بياناتك</h3>
          <div class="field" id="field-name"><label>الاسم الكامل</label><div class="field-wrap"><input type="text" id="inp-name" placeholder=""><span class="field-icon">👤</span></div><div class="field-err hidden"></div></div>
          <div class="field" id="field-phone"><label>رقم الجوال</label><div class="field-wrap"><input type="tel" id="inp-phone" placeholder="05XXXXXXXX"><span class="field-icon">📞</span></div><div class="field-err hidden"></div></div>
          <div class="field" id="field-address"><label>العنوان</label><div class="field-wrap"><input type="text" id="inp-address" placeholder="الحي، الشارع، رقم المبنى"><span class="field-icon">📍</span></div><div class="field-err hidden"></div></div>
          <div class="field"><label>ملاحظات (اختياري)</label><div class="field-wrap"><input type="text" id="inp-notes" placeholder="ملاحظات إضافية للطلب"><span class="field-icon">💬</span></div></div>
        </div>
      </div>
      <div>
        <div class="summary">
          <h3>ملخص الطلب</h3>
          <div class="summary-divider">${summaryLines}</div>
          <div class="summary-total"><span class="label">الإجمالي</span><span class="amount">${cartTotal()} <span style="font-size:16px">ر.س</span></span></div>
          ${submitBtn}
          <p class="summary-note">الدفع عن طريق التحويل البنكي بعد التأكيد</p>
        </div>
      </div>
    </div>
  `;
}

async function submitOrder() {
  const name = document.getElementById('inp-name').value.trim();
  const phone = document.getElementById('inp-phone').value.trim();
  const address = document.getElementById('inp-address').value.trim();
  const notes = document.getElementById('inp-notes').value.trim();
  ['name', 'phone', 'address'].forEach(f => {
    const el = document.getElementById(`field-${f}`);
    el.classList.remove('error');
    el.querySelector('.field-err').classList.add('hidden');
  });
  let valid = true;
  if (!name) { showError('name', 'الاسم مطلوب'); valid = false; }
  if (!phone) { showError('phone', 'رقم الجوال مطلوب'); valid = false; }
  else if (!/^0?5\d{8}$/.test(phone.replace(/\s/g, ''))) { showError('phone', 'رقم جوال غير صحيح'); valid = false; }
  if (!address) { showError('address', 'العنوان مطلوب'); valid = false; }
  if (!valid) return;

  const items = Object.entries(state.cart).map(([id, qty]) => {
    const d = dishes.find(x => x.id === id);
    return { dishId: id, name: d.name, emoji: d.emoji, image: d.image, color: d.color, quantity: qty, price: d.price, subtotal: d.price * qty };
  });
  const itemsSummary = items.map(i => `${i.emoji} ${i.name} × ${i.quantity} = ${i.subtotal} ر.س`).join('\n');
  const order = {
    id: `ORD-${Date.now().toString().slice(-6)}`,
    customerName: name, customerPhone: phone, customerAddress: address, customerNotes: notes,
    items, itemsSummary, total: cartTotal(), status: 'جديد',
    createdAt: new Date().toISOString()
  };

  state.submitting = true;
  render();
  const result = await AirtableAPI.createOrder(order);
  state.submitting = false;

  if (result.success) {
    state.lastOrder = order;
    state.cart = {};
    showToast('تم إرسال طلبك بنجاح ✓', 'success');
    navigate('confirmation');
  } else {
    render();
    showToast('فشل إرسال الطلب: ' + result.error, 'error');
  }
}

function showError(field, msg) {
  const el = document.getElementById(`field-${field}`);
  el.classList.add('error');
  const err = el.querySelector('.field-err');
  err.textContent = msg;
  err.classList.remove('hidden');
}

function renderConfirmation() {
  const o = state.lastOrder;
  if (!o) { setTimeout(() => navigate('home'), 0); return ''; }
  return `
    <div class="fade-up" style="max-width:720px;margin:0 auto">
      <div class="confirm-head">
        <div class="confirm-icon-wrap">✓</div>
        <h2>تم استلام طلبك</h2>
        <div class="order-id">رقم الطلب: <strong>${o.id}</strong></div>
      </div>
      <div class="step-card step-dark">
        <div class="step-head"><div class="step-num">١</div><h3>حول المبلغ على الحساب التالي</h3></div>
        <div class="bank-row"><span class="lbl">البنك</span><div class="val"><span>${CONFIG.BANK_INFO.bankName}</span></div></div>
        <div class="bank-row"><span class="lbl">اسم المستفيد</span><div class="val"><span>${CONFIG.BANK_INFO.accountName}</span></div></div>
        <div class="bank-row"><span class="lbl">رقم الحساب</span><div class="val"><span>${CONFIG.BANK_INFO.accountNumber}</span><button class="copy-btn" id="copy-acc" onclick="copyText('${CONFIG.BANK_INFO.accountNumber}', 'copy-acc')">📋</button></div></div>
        <div class="bank-row"><span class="lbl">الآيبان</span><div class="val"><span>${CONFIG.BANK_INFO.iban}</span><button class="copy-btn" id="copy-iban" onclick="copyText('${CONFIG.BANK_INFO.iban}', 'copy-iban')">📋</button></div></div>
        <div class="amount-box"><div class="lbl">المبلغ المطلوب</div><div class="amt">${o.total} ريال</div></div>
      </div>
      <div class="step-card step-light">
        <div class="step-head"><div class="step-num">٢</div><h3>أرسل إيصال التحويل</h3></div>
        <p style="color:#654321">بعد التحويل، أرسل صورة من الإيصال على واتساب الرقم: <strong style="color:#B8860B" dir="ltr">${CONFIG.WHATSAPP_NUMBER}</strong></p>
      </div>
      <div class="step-card step-light">
        <div class="step-head"><div class="step-num">٣</div><h3>نتواصل معك</h3></div>
        <p style="color:#654321">بنتواصل معك خلال ساعة لتأكيد موعد التوصيل. شكراً لثقتك فينا 🌿</p>
      </div>
      <button class="btn btn-primary" style="padding:16px;font-size:16px" onclick="navigate('home')">العودة للقائمة الرئيسية</button>
    </div>
  `;
}

function copyText(text, btnId) {
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    btn.classList.add('copied');
    btn.textContent = '✓';
    setTimeout(() => { btn.classList.remove('copied'); btn.textContent = '📋'; }, 2000);
  });
}

function renderAdminLogin() {
  return `
    <div class="login-box fade-up">
      <div class="lock-icon">🔒</div>
      <h2>لوحة المسؤول</h2>
      <p class="sub">أدخل كلمة السر للدخول</p>
      <input type="password" id="admin-pw" placeholder="كلمة السر" onkeydown="if(event.key==='Enter')doLogin()">
      <div class="err hidden" id="login-err"></div>
      <button class="btn btn-primary" onclick="doLogin()">دخول</button>
      <p class="hint">(للتجربة: كلمة السر هي ${CONFIG.ADMIN_PASSWORD})</p>
    </div>
  `;
}

function doLogin() {
  const pw = document.getElementById('admin-pw').value;
  const err = document.getElementById('login-err');
  if (pw === CONFIG.ADMIN_PASSWORD) {
    state.adminAuthed = true;
    navigate('admin');
  } else {
    err.textContent = 'كلمة السر غير صحيحة';
    err.classList.remove('hidden');
  }
}

function renderAdmin() {
  if (state.loading) {
    return `<div class="loading-state"><div class="spinner"></div><p>جاري تحميل الطلبات من Airtable...</p></div>`;
  }
  const errorBanner = state.error ? `<div class="error-banner"><strong>⚠️ تعذّر الاتصال بـ Airtable</strong>${state.error}</div>` : '';
  const stats = {
    total: state.orders.length,
    new: state.orders.filter(o => o.status === 'جديد').length,
    preparing: state.orders.filter(o => o.status === 'قيد التحضير').length,
    delivered: state.orders.filter(o => o.status === 'تم التسليم').length,
    revenue: state.orders.filter(o => o.status === 'تم التسليم').reduce((s, o) => s + o.total, 0)
  };
  const filtered = state.filter === 'all' ? state.orders : state.orders.filter(o => o.status === state.filter);
  const filters = [
    { key: 'all', label: 'الكل' }, { key: 'جديد', label: 'جديدة' },
    { key: 'قيد التحضير', label: 'قيد التحضير' }, { key: 'جاهز', label: 'جاهزة' },
    { key: 'تم التسليم', label: 'مكتملة' }
  ].map(f => `<button class="filter-btn ${state.filter === f.key ? 'active' : ''}" onclick="setFilter('${f.key}')">${f.label}</button>`).join('');
  const ordersHtml = filtered.length === 0
    ? `<div style="text-align:center;padding:80px 20px;background:#FBF6EC;border:2px dashed #E8D5B7;border-radius:16px"><div style="font-size:48px;opacity:0.3;margin-bottom:12px">📦</div><p style="font-size:17px;color:#8B4513">لا توجد طلبات في هذه الفئة</p></div>`
    : filtered.map(o => renderOrderCard(o)).join('');

  return `
    <div class="fade-up">
      <div class="admin-head">
        <div><h2>لوحة الطلبات</h2><p>إدارة ومتابعة طلبات العملاء</p></div>
        <div class="admin-actions">
          <button class="icon-btn" onclick="loadOrders()">🔄 تحديث</button>
          <button class="icon-btn danger" onclick="confirmDeleteAll()">🗑 مسح الكل</button>
        </div>
      </div>
      ${errorBanner}
      <div class="stats-grid">
        <div class="stat-card"><div class="top" style="color:#5C2C0C">📦 إجمالي الطلبات</div><div class="val">${stats.total}</div></div>
        <div class="stat-card"><div class="top" style="color:#92400E">⏰ جديدة</div><div class="val">${stats.new}</div></div>
        <div class="stat-card"><div class="top" style="color:#1E40AF">👨‍🍳 قيد التحضير</div><div class="val">${stats.preparing}</div></div>
        <div class="stat-card"><div class="top" style="color:#065F46">✓ مكتملة</div><div class="val">${stats.delivered}</div></div>
        <div class="stat-card"><div class="top" style="color:#B8860B">💰 الإيرادات</div><div class="val">${stats.revenue} ر.س</div></div>
      </div>
      <div class="filters">${filters}</div>
      ${ordersHtml}
    </div>
  `;
}

function setFilter(f) { state.filter = f; render(); }

function renderOrderCard(o) {
  const d = new Date(o.createdAt);
  const dateStr = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')} - ${d.toLocaleDateString('ar-SA')}`;
  const sc = STATUS_COLORS[o.status] || { bg: '#E5E7EB', text: '#374151' };
  const expanded = state.expandedOrders.has(o.recordId);
  const statusBtns = ['جديد', 'قيد التحضير', 'جاهز', 'تم التسليم'].map(s => {
    const c = STATUS_COLORS[s];
    const isActive = o.status === s;
    return `<button class="status-btn" onclick="setStatus('${o.recordId}', '${s}')" style="background:${isActive ? c.text : c.bg};color:${isActive ? c.bg : c.text}">${s}</button>`;
  }).join('');
  const itemsHtml = o.items.length > 0
    ? o.items.map(i => `<div class="item-line"><span>${i.emoji || '🍽'} ${i.name} × ${i.quantity}</span><span class="sub">${i.subtotal} ر.س</span></div>`).join('')
    : `<div style="padding:8px 12px;color:#8B4513;font-size:13px">${o.itemsSummary || 'لا توجد تفاصيل'}</div>`;
  const detailsHtml = expanded ? `
    <div class="details">
      <h5>الأصناف:</h5>
      ${itemsHtml}
      ${o.customerNotes ? `<div class="notes-box"><div class="lbl">ملاحظات العميل:</div><div style="font-size:14px;color:#5C2C0C">${o.customerNotes}</div></div>` : ''}
      <div class="status-actions">
        ${statusBtns}
        <button class="status-btn delete-btn" onclick="confirmDeleteOrder('${o.recordId}')">🗑 حذف</button>
      </div>
    </div>` : '';

  return `
    <div class="order-card">
      <div class="order-top">
        <div>
          <div class="order-customer">${o.customerName}<span class="status-pill" style="background:${sc.bg};color:${sc.text}">${o.status}</span></div>
          <div class="order-meta">${o.id} • ${dateStr}</div>
        </div>
        <div class="order-total">
          <div class="amt">${o.total} ر.س</div>
          <div class="count">${o.items.reduce((s,i)=>s+(i.quantity||0),0)} صنف</div>
        </div>
      </div>
      <div class="order-info-grid">
        <div>📞 <span dir="ltr">${o.customerPhone}</span></div>
        <div>📍 ${o.customerAddress}</div>
      </div>
      <button class="toggle-details" onclick="toggleOrder('${o.recordId}')">${expanded ? 'إخفاء التفاصيل ▲' : 'عرض التفاصيل ▼'}</button>
      ${detailsHtml}
    </div>
  `;
}

function toggleOrder(id) {
  if (state.expandedOrders.has(id)) state.expandedOrders.delete(id);
  else state.expandedOrders.add(id);
  render();
}

async function setStatus(recordId, status) {
  const o = state.orders.find(x => x.recordId === recordId);
  if (!o) return;
  const oldStatus = o.status;
  o.status = status;
  render();
  const result = await AirtableAPI.updateOrderStatus(recordId, status);
  if (result.success) showToast(`تم تحديث الحالة إلى "${status}"`, 'success');
  else { o.status = oldStatus; render(); showToast('فشل التحديث: ' + result.error, 'error'); }
}

function confirmDeleteOrder(recordId) {
  if (confirm('هل أنت متأكد من حذف هذا الطلب؟ لا يمكن التراجع.')) deleteOrderHandler(recordId);
}

async function deleteOrderHandler(recordId) {
  const result = await AirtableAPI.deleteOrder(recordId);
  if (result.success) {
    state.orders = state.orders.filter(o => o.recordId !== recordId);
    render();
    showToast('تم حذف الطلب', 'success');
  } else showToast('فشل الحذف: ' + result.error, 'error');
}

function confirmDeleteAll() {
  const count = state.orders.length;
  if (count === 0) { showToast('لا توجد طلبات للحذف', 'info'); return; }
  if (confirm(`هل أنت متأكد من حذف جميع الطلبات (${count} طلب)؟ لا يمكن التراجع.`)) deleteAllHandler();
}

async function deleteAllHandler() {
  state.loading = true;
  render();
  const result = await AirtableAPI.deleteAllOrders();
  state.loading = false;
  if (result.success) {
    state.orders = [];
    render();
    showToast(`تم حذف ${result.count} طلب بنجاح`, 'success');
  } else { render(); showToast('فشل الحذف: ' + result.error, 'error'); }
}

render();
</script>
</body>
</html>
