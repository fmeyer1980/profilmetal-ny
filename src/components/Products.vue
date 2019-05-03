<template>
    <section class="products pt-7 pb-7">
        <div class="container">
            <div class="section-heading mb-7">
                <h2 class="title h3">Populære vare lige nu</h2>
                <!-- <p class="opc-7">Her kan du finde vores mest populærer vare</p> -->
            </div>
            <div class="products-wrapper">
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="../assets/images/p-img-1.jpg" alt="" width="290" height="240" fit="contain" background="#fff" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">3M 8810 Sikkerhedsmaske mod partikler (3 stk i pakken)</p>
                        <div class="products__item__content__bottom">
                            <span class="price">20,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="../assets/images/p-img-2.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink Bøjning Ø87 mm 70°</p>
                        <div class="products__item__content__bottom">
                            <span class="price">45,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="../assets/images/p-img-3.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">Ståltrapez TP19 – Bestil på mål (Bestillingskøb)</p>
                        <div class="products__item__content__bottom">
                            <span class="price">Fra 0,85 <small>Kr</small>
                                <span>pr. cm. inkl. moms.</span>
                            </span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="../assets/images/p-img-4.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink brøndkrave Ø87/150 mm</p>
                        <div class="products__item__content__bottom">
                            <span class="price">100,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="https://www.profilmetal.dk/wp-content/uploads/skumklods-tp20-295x250.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink brøndkrave Ø87/150 mm</p>
                        <div class="products__item__content__bottom">
                            <span class="price">100,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="https://www.profilmetal.dk/wp-content/uploads/Trapezplade-TP20-Sort-295x241.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink brøndkrave Ø87/150 mm</p>
                        <div class="products__item__content__bottom">
                            <span class="price">100,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="https://www.profilmetal.dk/wp-content/uploads/montageskrue-selvborende-4-8x35mm.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink brøndkrave Ø87/150 mm</p>
                        <div class="products__item__content__bottom">
                            <span class="price">100,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
                <g-link class="products__item" to="/">
                    <div class="products__item__image-wrapper">
                        <g-image src="https://www.profilmetal.dk/wp-content/uploads/endebund-295x250.jpg" alt="" />
                    </div>
                    <div class="products__item__content">
                        <p class="heading">AluZink brøndkrave Ø87/150 mm</p>
                        <div class="products__item__content__bottom">
                            <span class="price">100,00 <small>Kr</small></span>
                            <div class="btn btn--primary basket">Tilføj kurv <span class="icon"></span></div>
                        </div>
                    </div>
                </g-link>
            </div>
            
        </div>
    </section>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>


.products-wrapper:hover .products__item:not(:hover) img{
    transform: scale(.95);
    opacity: .7;
}

.products{
    background-color: $light-gray-light;

    &-wrapper{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(260px, 1fr) );
        grid-gap: $gutter;
    }

    &__item{
        color: $dark-gray-dark;

        
        
        &__image-wrapper{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 26rem;
            border-bottom: solid 1px $light-gray-light;
            background-color: $white;
            overflow: hidden;

            img{
                transform: scale(1);
                transition: .3s;
                padding: 1rem;
            }
        }

        &__content{
            padding: 2rem 3rem 3rem;
            background-color: $white;

            .heading{
                font-weight: 600;
                text-align: center;
                margin: 0;
                height: 5.4rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &__bottom{
                display: flex;
                margin-top: 2rem;
                align-items: center;

                .price{
                    font-weight: 900;
                    font-size: 2.2rem;
                    letter-spacing: -1px;
                    line-height: 100%;
                    small{
                        font-size: 1.4rem;
                    }
                    span{
                        display: block;
                        font-size: 1.2rem;
                        font-weight: 500;
                        line-height: 100%;
                        margin-top: -2px;
                        padding-left: 1px;
                    }
                }

                .btn{
                    margin-left: $gutter / 2;
                    padding-left: .5em;
                    padding-right: .5em;
                    flex-grow: 1;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .icon{
                        background-image: url('../assets/images/basket-light.svg') ;
                        background-size: 1.5rem;
                        background-repeat: no-repeat;
                        width: 1.7rem;
                        height: 1.4rem;
                        display: inline-block;
                        margin-left: .6rem;

                    }
                }
                
            }

        }

        &:hover{

            img{
                transform: scale(1.05)
            }
        }

        


    }
   
}

</style>

