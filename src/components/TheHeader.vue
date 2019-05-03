    // <header class="header">
    //   <strong>
    //     <g-link to="/">Gridsome</g-link>
    //   </strong>
    //   <nav class="nav">
    //     <g-link class="nav__link" to="/">Home</g-link>
    //     <g-link class="nav__link" to="/about">About</g-link>
    //   </nav>
    // </header>


<template>
  <header class="header">
    <div class="header__top">
      <div class="container">

        <div class="trustpilot">
          <img class="trustpilot__logo" src="../assets/images/trustpilot-logo.png" alt="Trustpilot">
          <img class="trustpilot__stars" src="../assets/images/trustpilot-stars.png" alt="Trustpilot stars">
        </div>

        <div class="values">
          <p class="values__item">25 års erfaring med produktion af stålplader</p>
        </div>

        <ul class="top-menu">
          <li><g-link to="/">Om os</g-link></li>
          <li><g-link to="/about">Kundeservice</g-link></li>
          <li><g-link to="/cases">Kontakt os</g-link></li>
        </ul>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <g-link class="logo" to="/"><img src="../assets/images/logo.png" alt="" /></g-link>
        <nav class="nav">
          <ul class="main-menu">
            <li><g-link to="/">Forside</g-link></li>
            <li><g-link to="/about">Tagplader</g-link></li>
            <li><g-link to="/cases">Facadebeklædning</g-link></li>
            <li><g-link to="/om-os">Inddækninger</g-link></li>
            <li><g-link to="/om-os">Tilbehør</g-link></li>
            <li><g-link to="/om-os">Undertag</g-link></li>
            <li><g-link to="/kontact">Tagrender</g-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>


.header{
  position: relative;
  width: 100%;

  &__top{
    color: $white;
    height: 5rem;
    background-color: darken($dark-gray-dark, 1%);

    .container{
      display: flex;
      align-items: center;
      height: 100%;
      position: relative;
      z-index: 1;
    }

    .trustpilot{
      width: 25%;
      margin-left: 16.5rem;

      &__logo{
        height: 2.6rem;
        margin-right: $gutter / 2;
      }

      &__stars{
        height: 2.2rem;
      }

    }

    .values{
      flex-grow: 1;
      text-align: center;

      &__item{
        margin: 0 0 0 11px;
        position: relative;
        display: inline;
        font-size: 1.5rem;
        font-weight: 500;
        &::before{
          content: "";
          background-image: url('../assets/images/checkmak.svg');
          height: 9px;
          width: 12px;
          position: absolute;
          left: -22px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }

    .top-menu{
      @include list-style-none;
      display: flex;
      width: 25%;
      justify-content: flex-end;

      li{
        padding-left: 1.5rem;

        a{
          color: inherit;
          font-size: 1.4rem;
          font-weight: 500;
        }

      }
    }

  }

  &__bottom{
    height: 9rem;
    background-color: $light-gray-light;
    color: $dark-gray-dark;

    .container{
      display: flex;
      align-items: center;
      height: 100%;
    }

    .logo{
      height: 4.5rem;
      padding-right: 7rem;

      img{
        height: 100%;
      }
      
    }

    nav{
      position: relative;
      &:before{
          position: absolute;
          content: "";
          background: $black;
          width: 100%;
          height: 5rem;
          left: -5rem;
          top: -5rem;
          z-index: 0;
          transform: skewX(35deg);
      }
      &:after{
          position: absolute;
          content: "";
          background-image: linear-gradient(rgba($black, .04), rgba($black, 0));
          width: 100%;
          height: 50rem;
          left: 20.5rem;
          top: 9rem;
          z-index: 1;
          transform: skewX(35deg);
      }
    }

    .main-menu{
      position: relative;
      @include list-style-none;
      display: flex;
      background-color: transparent;
      height: 9rem;
      align-items: center;
      padding: 0 5rem 0 4rem;
       &:after{
          position: absolute;
          content: "";
          background: $white;
          width: 100%;
          height: 9rem;
          left: 0;
          top: 0;
          z-index: 0;
          transform: skewX(35deg);
          box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.08);
      }
      /* clip-path: polygon(0% 0%, 94% 0%, 100% 100%, 6% 100%); */

      

      li{
        position: relative;
        padding: 0 1.2em;
        z-index: 1;

        &:after{
          content: "";
          height: 1.4rem;
          width: 1px;
          background-color: rgba($black, 0.1);
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }
        &:last-child:after{
          display: none;
        }

        a{
          color: inherit;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          &:after{
            content: "";
            height: 3px;
            width: 0%;
            background-color: $primary;
            position: absolute;
            bottom: -4px;
            left: 1px;
            transition: width .2s ease-in;
          }
          
          &:hover{
            &:after{
              width: 50%;
            }
          }
        }

        .active--exact{

          &:after{
            width: 50%;
          }

        }

      }
      
    }

    /* .search{

    }

    .basket{

    } */


  }

}

</style>

