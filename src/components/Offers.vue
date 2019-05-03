<template>
    <section class="offers">
            <div class="offers-wrapper">
                <g-link class="discount" to="/"> 
                    <img class="icon" src="../assets/images/discount-icon.svg" />
                    <div class="discount__content">
                        <h3>Få et godt tilbud</h3>
                        <p class="opc-7">Udfyld vores formular, og få en skarp pris på dit projekt.</p>
                    </div>
               </g-link>
               <g-link class="stock" to="/"> 
                    <img class="icon" src="../assets/images/stock-icon.svg" />
                    <div class="stock__content">
                        <h3>Få et godt tilbud</h3>
                        <p class="opc-7">Udfyld vores formular, og få en skarp pris på dit projekt.</p>
                    </div>
               </g-link>
               <g-link class="contact" to="/"> 
                    <img class="icon" src="../assets/images/contact-icon.svg" />
                    <div class="contact__content">
                        <p>Eller kontakt os her.</p>
                        <span>56 63 02 22</span>
                    </div>
               </g-link>
            </div>
    </section>
</template>

<script>

export default {

}
</script>


<style lang="scss" scoped>


.offers{
    background-image: linear-gradient(to right, $dark-gray-light 70%, $primary 30%);
    height: 15rem;
    

    &-wrapper{
        @include container;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        /* a{
            width: 33.33%;
            display: block;
        } */
        
    }

    a{
        background-color: $dark-gray-light;
        padding: 0 $gutter * 1.5;
        color: $white;
        display: flex;
        align-items: center;

        img.icon{
            height: 5rem;
        }

        h3{
            margin-top: 0;
            margin-bottom: .2em;
            font-size: 2.2rem;
            display: inline-block;
            position: relative;

            &:after{
                content: "";
                background-image: url('../assets/images/arrow-light-right.svg');
                background-repeat: no-repeat;
                background-size: .6rem;
                background-position: 50%;
                background-color: $primary;
                width: 2.2rem;
                height: 2.2rem;
                border-radius: 2.2rem;
                position: absolute;
                right: -3.2rem;
            }
        }

        p{
            margin: 0;
        }

        > div{
            margin-left: $gutter / 1.5;
        }
        
        &:first-child{
            padding-left: 0;
        }

        &:last-child{
            padding-right: 0;
        }

    }

    .contact{
        background-color: $primary;
        color: $dark-gray-dark;

        p{
            padding-left: 5px;
        }

        span{
            font-size: 3.8rem;
            font-weight: 900;
            line-height: 100%;
            margin-top: -3px;
            display: block;
        }
    }
    

    .discount{
        border-right: solid 1px $dark-gray-dark;
    }


}

</style>

