<template>
  	<header>
      	<nav>
        	<RouterLink to="/">HID Scanner</RouterLink>
        	<RouterLink to="/usbModeView">USB Scanner</RouterLink>
      	</nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
    color:#68f5b2;
	background-color: #000000;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: #000000;
  text-decoration: none;
  transition: 0.4s;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
	border-right: 1px solid #000;
    margin: 0 100px 0 0;
  }
/* 
  .logo {
    margin: 0 2rem 0 0;
  } */
/* 
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  } */

  nav {
    /* text-align: left; */
    /* margin-left: -1rem; */
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
