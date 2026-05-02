import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main class="landing-shell">
      <section class="hero-block">
        <div class="hero-copy">
          <span class="eyebrow">Civic Naturalist Zoo</span>
          <h1>Reconnect with nature through a seamless ticket experience.</h1>
          <p>Book your next visit in seconds, explore curated trails, and enjoy conservation-focused exhibits with confidence.</p>
          <div class="hero-actions">
            <a routerLink="/book/date" class="primary-button">Book Your Visit</a>
            <a routerLink="/login" class="secondary-button">Sign in</a>
          </div>
        </div>
        <div class="hero-visual">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJk6JYdkqIqG7bUWsecSJCEebtop0HGsTfwNLXYiU23nDg-nm8SOmDnpLvOanMfxISDxreovivCcH9F3j2ZYjy5TmFoQht7xW8BpnAEy7Zi27wYggD5UBYGXoiy9MJsF36LjdpxPQyDXbYDkyt73oxk2YAFHseBfc0nmaX8ZD72kv5U8gD6ewaWwfqu_69iqoEheIga5FSdEYFAPXVZ1mjFn1QxQiK3gGyul71iYniZGVdwo5DmMJ4tf8VoR8gp8jo5Zm-caKo52hN"
            alt="Lion in nature" />
          <div class="hero-badge">
            <span>Live habitat status</span>
            <strong>All exhibits open today</strong>
          </div>
        </div>
      </section>

      <section class="feature-grid">
        <article class="feature-card">
          <span class="feature-icon">park</span>
          <h2>Curated tours</h2>
          <p>Choose from guided nature trails, nocturnal walks, and habitat highlights.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon">calendar_today</span>
          <h2>Flexible slots</h2>
          <p>Reserve the perfect entry time and manage your group details in one flow.</p>
        </article>
        <article class="feature-card">
          <span class="feature-icon">eco</span>
          <h2>Conservation support</h2>
          <p>Every booking contributes directly to our ecological restoration programs.</p>
        </article>
      </section>

      <section class="highlight-panel">
        <div>
          <p class="eyebrow">Featured experience</p>
          <h2>Sanctuary access with premium behind-the-scenes tours</h2>
          <p>Book an immersive visit that includes curated animal encounters, botanical trails, and private conservation briefings.</p>
        </div>
        <div class="highlight-meta">
          <span class="pill">Top rated</span>
          <span class="pill">Eco-friendly</span>
        </div>
      </section>
    </main>
  `,
  styles: [
    `
      .landing-shell { display: grid; gap: 3rem; padding: 3rem 2rem; max-width: 1200px; margin: 0 auto; }
      .hero-block { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 2rem; align-items: center; }
      .hero-copy { display: grid; gap: 1.5rem; }
      .hero-copy h1 { margin: 0; font-size: clamp(2.75rem, 4vw, 4.75rem); line-height: 1.02; max-width: 13ch; }
      .hero-copy p { margin: 0; max-width: 40rem; color: #4b5563; font-size: 1.05rem; line-height: 1.75; }
      .eyebrow { display: inline-flex; align-items: center; padding: 0.8rem 1.1rem; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.18em; font-weight: 700; font-size: 0.68rem; background: rgba(45, 80, 22, 0.12); color: #276749; }
      .hero-actions { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; }
      .primary-button, .secondary-button { display: inline-flex; align-items: center; justify-content: center; padding: 1rem 1.8rem; border-radius: 1rem; font-weight: 700; text-decoration: none; transition: transform 0.2s ease, box-shadow 0.2s ease; }
      .primary-button { background: #173901; color: #ffffff; box-shadow: 0 18px 40px rgba(23, 57, 1, 0.18); }
      .primary-button:hover { transform: translateY(-1px); }
      .secondary-button { background: #f3f4f6; color: #1f2937; }
      .hero-visual { position: relative; overflow: hidden; border-radius: 2rem; min-height: 420px; box-shadow: 0 36px 80px rgba(15, 23, 42, 0.12); }
      .hero-visual img { width: 100%; height: 100%; object-fit: cover; display: block; }
      .hero-badge { position: absolute; bottom: 1.5rem; left: 1.5rem; display: inline-grid; gap: 0.4rem; padding: 1rem 1.2rem; border-radius: 1.5rem; background: rgba(255, 255, 255, 0.88); box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08); }
      .hero-badge strong { display: block; font-weight: 800; color: #1f2937; }
      .feature-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.5rem; }
      .feature-card { background: #ffffff; border: 1px solid #e5e7eb; padding: 2rem; border-radius: 1.5rem; display: grid; gap: 1rem; box-shadow: 0 20px 40px rgba(15, 23, 42, 0.06); }
      .feature-icon { width: 3rem; height: 3rem; display: grid; place-items: center; border-radius: 1rem; background: #d1fae5; color: #166534; font-family: 'Material Symbols Outlined', sans-serif; font-size: 1.5rem; }
      .feature-card h2 { margin: 0; font-size: 1.25rem; }
      .feature-card p { margin: 0; color: #4b5563; line-height: 1.75; }
      .highlight-panel { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 2rem; background: linear-gradient(180deg, #f3f4f6 0%, #ffffff 100%); padding: 2rem; border-radius: 2rem; border: 1px solid #e5e7eb; }
      .highlight-panel h2 { margin: 0 0 0.75rem; font-size: 2rem; line-height: 1.1; }
      .highlight-meta { display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center; }
      .pill { display: inline-flex; align-items: center; justify-content: center; padding: 0.7rem 1rem; border-radius: 9999px; background: #d1fae5; color: #166534; font-weight: 700; font-size: 0.8rem; }
      @media (max-width: 1024px) { .hero-block, .highlight-panel { grid-template-columns: 1fr; } }
      @media (max-width: 720px) { .landing-shell { padding: 2rem 1rem; } .feature-grid { grid-template-columns: 1fr; } }
    `
  ]
})
export class LandingPage {}
