import Restaurantes from "../Components/Restarantes"

    export let pedidos=[
        {
            img:"/ensalada_10.png",
            off:"15%",
            food:"Ensalada",
            dias_restantes:"6"
        },
        {
            img:"/ensalada_15.png",
            off:"10%",
            food:"Ensalada",
            dias_restantes:"6"
        },
        {
            img:"/ensalada_25.png",
            off:"25%",
            food:"Ensalada",
            dias_restantes:"7"
        },
        {
            img:"/ensalada_20.png",
            off:"20%",
            food:"Ensalada",
            dias_restantes:"8"
        }

    ]
    export let funciona=[
        {
        img:"/ubicacion.png",
        titulo:"Selecciona Ubicación",
        parrafo:"Elija el lugar donde se le entregará la comida."
        },
        {
        img:"/elegir_orden.png",
        titulo:"Elegir Orden",
        parrafo:"Consulta cientos de menús para elegir tu comida favorita."  
        },
        {
        img:"/paga_adelantado.png",
        titulo:"Paga por Adelantado",
        parrafo:"Es rápido, seguro y sencillo. Seleccione varias formas de pago."
        },
        {
        img:"/disfruta_comida.png",
        titulo:"Disfruta tu Comida",
        parrafo:"La comida se prepara y se entrega directamente en tu casa."
        }
    ]
    export let populares=[
        {
        img:"/hamburguesa_queso.png",
        titulo:"Hamburguesa con queso",
        parrafo:"📍Arena hamburguesa.",
        precio:"$12.800"
        },
        {
        img:"/pastel_toffe.png",
        titulo:"Pastel de toffe",
        parrafo:"📍La Chagra.",
        precio:"$20.000"
        },
        {
        img:"/pastelito.png",
        titulo:"Pastelito",
        parrafo:"📍Cake World.",
        precio:"$2.000"
        },
        {
        img:"/sandwiches_crujiente.png",
        titulo:"Sándwich crujiente",
        parrafo:"📍Seré.",
        precio:"$9.000"
        },
        {
        img:"/sopa_tailandesa.png",
        titulo:"Sopa tailandesa",
        parrafo:"📍El Cielo.",
        precio:"$12.000"
        }
    ]
    export let tiendas=[
        {
        off:"20%",
        img:"/foodworld.png",
        logo:"/foodworld_logo.png",
        titulo:"foodworld", 
        estrellas:"46",
        boton:"Abre mañana"
        },
        {
        off:"20%",
        img:"/pizzahub.png",
        logo:"/pizzahub_logo.png",
        titulo:"Pizzahub", 
        estrellas:"46",
        boton:"Abre mañana"
        },
        {
        off:"10%",
        img:"/donuts_hot.png",
        logo:"/donuts_hot_logo.png",
        titulo:"Donuts", 
        estrellas:"20",
        boton:"Abierto ahora"
        },
        {
        off:"20%",
        img:"/subway.png",
        logo:"/subway_logo.png",
        titulo:"Subway", 
        estrellas:"50",
        boton:"Abierto ahora"
        }
    ]
   export let restaurantes=[
    {
        off:"20%",
        img:"/Ruby_tuesday.png",
        logo:"/Ruby_logo.png",
        titulo:"Ruby Tuesday", 
        estrellas:"26",
        boton:"Abierto ahora"
        },
        {
        off:"25%",
        img:"/Kuakata_Fried.png",
        logo:"/Kuakata_logo.png",
        titulo:"Fried Chicken", 
        estrellas:"53",
        boton:"Abierto ahora"
        },
        {
        off:"10%",
        img:"/Red_square.png",
        logo:"/Red_logo.png",
        titulo:"Red Square", 
        estrellas:"45",
        boton:"Abierto ahora"
        },
        {
        off:"10%",
        img:"/Taco_bell.png",
        logo:"/Taco_logo.png",
        titulo:"Taco Bell", 
        estrellas:"35",
        boton:"Abierto ahora"
        }
   ]
   export let tipos=[
    {
    img:'/pizza.png',
    titulo:"pizza" 
    },
    {
    img:'/hamburguesa.png',
    titulo:"hamburguesa"
    },
    {
    img:'/fideos.png',
    titulo:"Fideos" 
    },
    {
    img:'/sub_sandwich.png',
    titulo:"Sub-sándwich"
    },
    {
    img:'/chow_mein.png',
    titulo:"chow mein" 
    },
    {
    img:'/bistec.png',
    titulo:"Bistec" 
    },
   ]
   export let entregas=[
    {
     img:"/descuentos_diarios.png",
     titulo:"Descuentos diarios"   
    },
    {
     img:"/rastreo.png",
     titulo:"Rastreo en tiempo real"   
    },
    {
     img:"/tiempo-real.png",
     titulo:"Rápida Entrega"   
    }
]
export let ofertas=[
    {
        img:'/sandwich.png',
        strong:'Mejores ofertas en',
        titulo:'Sandwiches crujientes',
        parrafo:'Disfruta del gran tamaño de los sándwiches. Completo Rebanada perfecta de sándwiches.'
    },
    {
        img:'/pollo_al_horno.png',
        strong:'Celebra las fiestas con',
        titulo:'Pollo al Horno',
        parrafo:'Consigue el mejor pollo al horno con un delicioso sabor a chile con limón. Echa un vistazo las mejores ofertas de pollo.'
    },
    {
        img:'/pizza_pepperoni.png',
        strong:'Pizza de pepperoni',
        titulo:'Caliente?',
        parrafo:'Disfruta del gran tamaño de los sándwiches. Completo Rebanada perfecta de sándwiches.'
    }
]
export let cities=[
    {
        ciudadUno:'Barranquilla',
        ciudadDos:'Bello',
        ciudadTres:'Bogotá',
        ciudadCuatro:'Bucaramanga',
        ciudadCinco:'Cali'
    },
    {
        ciudadUno:'Cali',
        ciudadDos:'Cartagena',
        ciudadTres:'Cúcuta',
        ciudadCuatro:'Florencia',
        ciudadCinco:'Ibague'
    },
    {
        ciudadUno:'Manizales',
        ciudadDos:'Medellin',
        ciudadTres:'Monteria',
        ciudadCuatro:'Neiva',
        ciudadCinco:'Pasto'
    },
    {
        ciudadUno:'Pereira',
        ciudadDos:'Popayán',
        ciudadTres:'Quibdó',
        ciudadCuatro:'Rioacha',
        ciudadCinco:'Santa Marta'
    },
    {
        ciudadUno:'Sincelejo',
        ciudadDos:'Tunja',
        ciudadTres:'Valledupar',
        ciudadCuatro:'Villavicencio',
        ciudadCinco:'Yopal'
    }
]
export let contacto=[
    {
    titulo:"Company",
    parrafoUno:"Sobre nosotros",
    parrafoDos:"Equipo",
    parrafoTres:"Carreras",
    parrafoCuatro:"Blog"
    },
    {
    titulo:"Contacto",
    parrafoUno:"Ayuda y soporte",
    parrafoDos:"Acompañanos",
    parrafoTres:"Trabaja con nosotros"
    },
    {
    titulo:"Legal",
    parrafoUno:"Terminos y condiciones",
    parrafoDos:"Cancelacion",
    parrafoTres:"Politica Privacidad",
    parrafoCuatro:"Cookies"
    },
    
]