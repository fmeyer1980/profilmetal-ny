<template>
    <section class="categories">
        <div class="container">
            
<!-- <carousel :nav="false" :dots="true" :margin="30" :responsive="{0:{items:1,nav:false},600:{items:3,nav:false}}">
                <div class="categories__item">
                    <g-image class="categories__item__image" src="~/assets/images/category-img-1.jpg" width="390" height="280" fit="contain" />
                    <div class="categories__item__content">
                        <h2 class="heading h3">Ståltagplader</h2>
                        <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>

                        <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                        <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                    </div>
                </div>
                <div class="categories__item">
                    <g-image class="categories__item__image" src="~/assets/images/category-img-2.jpg" width="390" height="280" fit="contain" />
                    <div class="categories__item__content">
                        <h2 class="heading h3">Inddækninger</h2>
                        <p class="opc-7 mt-0 mb-2">Standard- og specialinddækninger til tag…</p>
                        <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                        <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                    </div>
                </div>
                <div class="categories__item">
                    <g-image class="categories__item__image" src="~/assets/images/category-img-3.jpg" width="390" height="280" fit="contain" />
                    <div class="categories__item__content">
                        <h2 class="heading h3">Stålfacade</h2>
                        <p class="opc-7 mt-0 mb-2">Beklæd og beskyt facaden med stærkt stål…</p>
                        <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                        <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                    </div>
                </div>
                <div class="categories__item">
                    <g-image class="categories__item__image" src="~/assets/images/category-img-1.jpg" width="390" height="280" fit="contain" />
                    <div class="categories__item__content">
                        <h2 class="heading h3">Ståltagplader</h2>
                        <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>
                        <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                        <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                    </div>
                </div>
            </carousel>            -->
            <ClientOnly>
                <carousel :perPageCustom="[[320, 1], [576, 2], [960, 3]]" :centerMode="true">
                    <slide>
                        <div class="categories__item">
                            <g-image class="categories__item__image" src="~/assets/images/category-img-1.webp" width="776" height="560" fit="inside" />
                            <div class="categories__item__content">
                                <h2 class="heading h3">Ståltagplader</h2>
                                <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>
                                <!-- <Btn btnType="primary" text="Køb nu" /> -->
                                <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                                <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="categories__item">
                            <g-image class="categories__item__image" src="~/assets/images/category-img-2.jpg" width="776" height="560" fit="inside" />
                            <div class="categories__item__content">
                                <h2 class="heading h3">Inddækninger</h2>
                                <p class="opc-7 mt-0 mb-2">Standard- og specialinddækninger til tag…</p>
                                <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                                <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="categories__item">
                            <g-image class="categories__item__image" src="~/assets/images/category-img-3.jpg" width="776" height="560" fit="inside" />
                            <div class="categories__item__content">
                                <h2 class="heading h3">Stålfacade</h2>
                                <p class="opc-7 mt-0 mb-2">Beklæd og beskyt facaden med stærkt stål…</p>
                                <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                                <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="categories__item">
                            <g-image class="categories__item__image" src="~/assets/images/category-img-1.jpg" width="776" height="560" fit="inside" />
                            <div class="categories__item__content">
                                <h2 class="heading h3">Ståltagplader</h2>
                                <p class="opc-7 mt-0 mb-2">Klassiske ståltagplader i forskellige varianter</p>
                                <g-link class="btn btn--primary" to="/">Køb nu</g-link>
                                <g-link class="btn btn--secondary" to="/">læs mere</g-link>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </ClientOnly>
        </div>
    </section>
</template>



<script>
  export default {
    name: 'Index',
    components: {
      Carousel: () =>
        import ('vue-carousel')
        .then(m => m.Carousel)
        .catch(),
      Slide: () =>
        import ('vue-carousel')
        .then(m => m.Slide)
        .catch()
    },
  }
</script>

<style lang="scss">

.categories{

    > div{
        position: relative;
    }
   
    .VueCarousel{
        width: calc(100% - 14rem);
         

        
        .VueCarousel-inner{
 
        }

        .VueCarousel-pagination{
            height: 26rem;
            position: absolute;
            top: 0;
            right: -14rem;
            width: 14rem;

            .VueCarousel-dot-container{
                height: 100% !important;;
                margin: 0 !important;
                display: flex;
            }

            .VueCarousel-dot{
                position: relative;
                width: 50% !important;;
                height: 100% !important;;
                background-color: rgba($black, .1) !important;
                margin: 0 !important;
                padding: 0 !important;
                border-radius: 0;
                opacity: .5;
                &--active{
                    background-color: $dark-gray-light !important;
                    opacity: 1;
                }
                &:after{
                    content: "";
                    background-image: url('../assets/images/arrow-light.svg');
                    background-repeat: no-repeat;
                    background-size: 10px;
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%)
                }
                &:last-child:after{
                    background-image: url('../assets/images/arrow-light-right.svg');
                    
                }
            }
        }
    }

}


</style>


<style lang="scss" scoped>

.container{
    margin-top: -10rem;
}

.categories{
  background-color: $dark-gray-dark;
  color: $white;
  padding-bottom: 9rem;

  &__item{
      width: 100%;
      padding-right: $gutter;

      img{
          width: 100%;
          height: 26rem;
          object-fit: cover;
      }

      &__content{

          p{
              font-size: 1.8rem;
          }

          .btn{
            margin-right: $gutter / 2;

            &--secondary{
                opacity: .5;
                &:hover{
                    opacity: 1;
                }
            }
          }

          
      }
      
  }

}

</style>

