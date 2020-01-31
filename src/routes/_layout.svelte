<script>
  export let segment;
  import { fmtHTML } from "../util";
  import Star from "../components/Star.svelte";
</script>

<style>
  .layout {
    display: flex;
    position: relative;
    height: 100vh;
    overflow: scroll;
  }

  .aside {
    background: var(--secondary);
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    padding: 30px 30px 50px;
    flex: 0 0 320px;
    color: #fff;
  }

  .version {
    margin: 30px 0 0;
    padding: 12px;
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }

    .aside {
      width: 100%;
      position: relative;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
  }

  .nav-heading {
    font-size: 16px;
    font-weight: normal;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 12px;
  }

  .link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 12px 20px;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    border-radius: 4px;
    line-height: 1.8;
  }

  .link.active {
    font-weight: bold;
    color: var(--primary);
  }

  .wrapper {
    flex: 1;
    width: 100%;
  }

  .container {
    max-width: 900px;
    padding: 40px;
    min-height: calc(100vh - 80px);
  }

  .logo {
    max-width: 80px;
  }

  .footer {
    width: 100%;
    background: var(--secondary);
    padding: 20px;
    height: 80px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .footer-text {
    margin-right: 20px;
    font-size: 14px;
    opacity: 0.8;
    line-height: 1.5;
  }

  .avatar {
    width: 32px;
    height: 32px;
  }

  .github {
    position: fixed;
    top: 0;
    right: 0;
    padding: 0;
    z-index: 1;
  }

  .github img {
    width: 80px;
    height: 80px;
  }
</style>

<div class="layout">
  <aside class="aside">
    <img alt="logo of svelte forms lib" class="logo" src="./logo.png" />
    <section class="version">
      <p>V1.0.4</p>
      <Star />
    </section>
    <nav>
      <h4 class="nav-heading">Getting started</h4>
      <a
        class="link"
        class:active={segment === 'introduction'}
        href="/introduction">
        Introduction
      </a>
      <a
        class="link"
        class:active={segment === 'observables'}
        href="/observables">
        Observables
      </a>
      <h4 class="nav-heading">Examples</h4>
      <a class="link" class:active={segment === 'basic'} href="/basic">Basic</a>
      <a class="link" class:active={segment === 'custom'} href="/custom">
        Custom validation
      </a>
      <a class="link" class:active={segment === 'yup'} href="/yup">
        Yup validation
      </a>
      <a class="link" class:active={segment === 'array'} href="/array">
        Forms array
      </a>
      <a class="link" class:active={segment === 'helpers'} href="/helpers">
        Helper components
      </a>
      <a class="link" class:active={segment === 'styling'} href="/styling">
        Styling
      </a>
      <a class="link" class:active={segment === 'field'} href="/field">
        {fmtHTML('Field')}
      </a>
    </nav>
  </aside>
  <main class="wrapper">
    <a
      class="github"
      href="https://github.com/tjinauyeung/svelte-forms-lib"
      target="_blank">
      <img src="./github.png" alt="github repository for svelte forms lib" />
    </a>
    <div class="container">
      <slot />
    </div>
    <footer class="footer">
      <span class="footer-text">
        Copyright ©2019. Code licensed under an MIT-style License
      </span>
      <a href="https://www.tjinauyeung.com" target="_blank">
        <img
          class="avatar"
          src="https://tjinauyeung.com/static/avatar-b2c241e7fd2f877f0c3948067254afc3.png"
          alt="avatar of Tjin Au Yeung" />
      </a>
    </footer>
  </main>
</div>
