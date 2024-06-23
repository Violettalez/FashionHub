<template>
  <div class="header">
    <div class="header-part1">
      <div class="container">
        <div class="settings">
          <a href="#"
            ><font-awesome-icon :icon="['fas', 'lock']" class="icon-first" />Log
            in/Register</a
          >
          <select id="lang" name="lang">
            <option value="english" selected>ENGLISH</option>
            <option value="ukrainian">UKRAINIAN</option>
          </select>
          <select id="currency" name="currency">
            <option value="usd" selected>USD</option>
            <option value="eur">EUR</option>
            <option value="uah">UAH</option>
          </select>
        </div>
        <div class="profile">
          <a href="#"
            ><font-awesome-icon :icon="['fas', 'user']" class="icon" />my
            account</a
          >
          <a href="#"
            ><font-awesome-icon :icon="['fas', 'gift']" class="icon" />my
            wishlist</a
          >
          <a href="#"
            ><font-awesome-icon
              :icon="['fas', 'check-circle']"
              class="icon"
            />checkout</a
          >
        </div>
      </div>
    </div>
    <div class="header-part2">
      <div class="container">
        <a href="#" class="logo">FASHION<span>HUB</span></a>
        <div class="search-basket">
          <input type="text" placeholder="Search by product..." />
          <a href="#" class="shopping-card"
            ><font-awesome-icon
              :icon="['fas', 'shopping-basket']"
              class="basket"
            />
            <p>Shopping card <br /><span>(empty)</span></p>
          </a>
        </div>
      </div>
    </div>
    <div class="header-part3">
      <div class="container">
        <ul>
          <li><a href="#" class="sel-page">Home page</a></li>
          <li><a href="#">Category</a></li>
          <li><a href="#">Brand</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {};
  },
};
</script>

<style src="./MainHeader.css"></style>
