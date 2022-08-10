<template>
  <div class="footer-container">
    <div class="company">
      <div class="copyright">ixo Foundation</div>
    </div>
    <div class="links-container">
      <ul class="learn">
        <li>About Us</li>
        <li>
          <a href="https://medium.com/ixo-blog" target="_blank">Medium</a>
        </li>
      </ul>
      <ul class="developers">
        <li>Tools</li>
        <li>
          <a href="https://status.ixo.earth/" target="_blank">Status</a>
        </li>
      </ul>
      <ul class="developers">
        <li>IXO</li>
        <li>
          <a href="" target="_blank">Wallets</a>
        </li>
      </ul>
      <ul class="developers">
        <li>ixo Foundation</li>
        <li>
          <a href="" target="_blank">Careers</a>
        </li>
      </ul>
      <ul class="developers">
        <li>Developers</li>
        <li>
          <a href="https://github.com/ixofoundation/" target="_blank">Github</a>
        </li>
      </ul>
      <ul class="developers">
        <li>Validators</li>
        <li>
          <a href="https://discord.gg/xFSdGBAw" target="_blank">Discord</a>
        </li>
      </ul>
    </div>
    <div class="sns-container">
      <div class="logos">
        <a href="https://discord.gg/xFSdGBAw" rel="noopener" target="_blank">
          <img
            src="/img/discord.svg"
            alt="link to Discord"
          />
        </a>
        <a href="https://medium.com/ixo-blog" rel="noopener" target="_blank">
          <img
            src="/img/medium.svg"
            alt="link to Medium"
          />
        </a>
        <a href="https://twitter.com/ixoworld" rel="noopener" target="_blank">
          <img
            src="/img/twitter.svg"
            alt="link to Twitter"
          />
        </a>
        <a href="https://t.me/ixonetwork" rel="noopener" target="_blank">
          <img
            src="/img/icon_telegram.png"
            alt="link to Telegram"
          />
        </a>
      </div>
      <a href="https://www.ixo.world/" target="_blank" class="ixoworld">ixo.world</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="stylus">
.footer-container {
  max-width: $contentWidth;
  padding: 5rem 1.5rem 2rem;
  margin: 0 auto;
  position: relative;
  clear: both;

  .copyright {
    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.67;
    letter-spacing: -0.019rem;
    padding-bottom: 0.25rem;
    text-transform: uppercase;
  }

  .links-container {
    font-size: 0;

    ul {
      font-size: 0.75rem;
      display: inline-block;
      vertical-align: top;
      text-align: left;
      white-space: nowrap;
      width: 50%;
      margin-top: 2rem;
      margin-bottom: 0;
      padding-left: 0;
    }

    li {
      line-height: 1.71;
      padding: 0;
      margin: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      &:first-child {
        font-weight: 500;
        text-transform: uppercase;
        margin-bottom: 0.313rem;
      }

      a {
        transition: 0.2s;
        color: var(--text-color);
        font-weight: 400;
        font-size: 0.813rem;
        opacity: 0.75;

        &:hover {
          opacity: 1;
        }
      }

      &:before {
        display: none;
      }
    }
  }
}

.subscribe {
  font-size: 0;

  .subscribe-title {
    font-size: 13px;
    margin: 0.625rem 0;
  }

  form {
    display: flex;
    justify-content: space-between;
  }

  input {
    flex: 1;
    appearance: none;
    border: 1px solid #d2d9f0;
    box-sizing: border-box;
    color: #0f0f0f;
    height: 2rem;
    padding-left: 0.625rem;
    font-size: 0.813rem;
    border-radius: 0.5rem 0 0 0.5rem;
    margin: 0;
  }

  button {
    appearance: none;
    background: #f5f6fb;
    border: 1px solid #d2d9f0;
    box-sizing: border-box;
    border-left: 0;
    height: 2rem;
    line-height: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 0 0.313rem 0.313rem 0;
    padding: 0 0.625rem;
    color: #2043b5;
    outline: 0;
    margin: 0;
  }
}

.sns-container {
  margin-top: 3rem;

  .logos {
    a {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      position: relative;
      opacity: 0.5;
      transition: 0.2s;
      margin-right: 0.188rem;

      img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -0.563rem;

      }

      &:hover {
        opacity: 1;
      }
    }
  }

  .ixoworld {
    display: block;
    margin: 1rem 0;
    font-size: 0.938rem;
    font-weight: 500;
    color: $accentColor;

    &:hover {
      color: $textColor;
    }
  }
}

.theme-dark{
  .sns-container{
    .logos{
      img{
        filter:invert(100%);
      }
    }
  }
}

@media (min-width: $MQMobileNarrow) {
  .footer-container {
    padding: 5rem 2rem 2rem;
  }
}

@media (min-width: $MQNarrow) {
  .footer-container {
    padding: 7.5rem 2.5rem 2.5rem;

    .copyright {
      font-size: 0.875rem;
      padding-bottom: 0.938rem;
    }

    .company {
      position: absolute;
      top: 7.5rem;
      left: 2.5rem;
    }

    .links-container {
      text-align: right;
      padding-left: 250px;

      ul {
        font-size: 0.938rem;
        text-align: left;
        white-space: nowrap;
        margin-left: 2.5rem;
        width: 120px;
        margin-top: 0;
        margin-bottom: 2rem;
      }

      li {
        &:first-child {
          font-size: 0.875rem;
          padding-bottom: 0rem;
        }
      }
    }
  }

  .sns-container {
    margin-top: 0;
    position: absolute;
    left: 2.5rem;
    top: 10.37rem;
  }
}
</style>
<!-- top: 17.5rem; -->