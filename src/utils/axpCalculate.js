import cuddle_kitchen_1 from '@/img/items/cuddle_kitchen_1.jpg'
import cuddle_kitchen_2 from '@/img/items/cuddle_kitchen_2.jpg'
import cuddle_kitchen_3 from '@/img/items/cuddle_kitchen_3.jpg'
import cuddle_kitchen_4 from '@/img/items/cuddle_kitchen_4.jpg'
import hummer_hut_1 from '@/img/items/hummer_hut_1.jpg'
import hummer_hut_2 from '@/img/items/hummer_hut_2.jpg'
import hummer_hut_3 from '@/img/items/hummer_hut_3.jpg'
import hummer_hut_4 from '@/img/items/hummer_hut_4.jpg'
import protector_pledge_1 from '@/img/items/protector_pledge_1.jpg'
import protector_pledge_2 from '@/img/items/protector_pledge_2.jpg'
import protector_pledge_3 from '@/img/items/protector_pledge_3.jpg'
import protector_pledge_4 from '@/img/items/protector_pledge_4.jpg'
import fantasy_facets_1 from '@/img/items/fantasy_facets_1.jpg'
import fantasy_facets_2 from '@/img/items/fantasy_facets_2.jpg'
import fantasy_facets_3 from '@/img/items/fantasy_facets_3.jpg'
import fantasy_facets_4 from '@/img/items/fantasy_facets_4.jpg'
import big_boomer_1 from '@/img/items/big_boomer_1.jpg'
import big_boomer_2 from '@/img/items/big_boomer_2.jpg'
import big_boomer_3 from '@/img/items/big_boomer_3.jpg'
import big_boomer_4 from '@/img/items/big_boomer_4.jpg'
import animal_pasture_1 from '@/img/items/animal_pasture_1.jpg'
import animal_pasture_2 from '@/img/items/animal_pasture_2.jpg'
import animal_pasture_3 from '@/img/items/animal_pasture_3.jpg'
import animal_pasture_4 from '@/img/items/animal_pasture_4.jpg'
import bubbling_bar_1 from '@/img/items/bubbling_bar_1.jpg'
import bubbling_bar_2 from '@/img/items/bubbling_bar_2.jpg'
import bubbling_bar_3 from '@/img/items/bubbling_bar_3.jpg'
import bubbling_bar_4 from '@/img/items/bubbling_bar_4.jpg'
import coal_kiln_1 from '@/img/items/coal_kiln_1.jpg'
import coal_kiln_2 from '@/img/items/coal_kiln_2.jpg'
import coal_kiln_3 from '@/img/items/coal_kiln_3.jpg'
import coal_kiln_4 from '@/img/items/coal_kiln_4.jpg'
import forger_furnace_1 from '@/img/items/forger_furnace_1.jpg'
import forger_furnace_2 from '@/img/items/forger_furnace_2.jpg'
import forger_furnace_3 from '@/img/items/forger_furnace_3.jpg'
import forger_furnace_4 from '@/img/items/forger_furnace_4.jpg'
import grain_grinder_1 from '@/img/items/grain_grinder_1.jpg'
import grain_grinder_2 from '@/img/items/grain_grinder_2.jpg'
import grain_grinder_3 from '@/img/items/grain_grinder_3.jpg'
import grain_grinder_4 from '@/img/items/grain_grinder_4.jpg'
import polisher_precision_1 from '@/img/items/polisher_precision_1.jpg'
import polisher_precision_2 from '@/img/items/polisher_precision_2.jpg'
import polisher_precision_3 from '@/img/items/polisher_precision_3.jpg'
import polisher_precision_4 from '@/img/items/polisher_precision_4.jpg'
import cotton_paper from '@/img/items/cotton_paper.jpg'
import iron_ingot from '@/img/items/iron_ingot.jpg'
import bronze_ingot from '@/img/items/bronze_ingot.jpg'
import steel_ingot from '@/img/items/steel_ingot.jpg'
import silver_ingot from '@/img/items/silver_ingot.jpg'
import gold_ingot from '@/img/items/gold_ingot.jpg'
import platinum_ingot from '@/img/items/platinum_ingot.jpg'
import platinum_dust from '@/img/items/platinum_dust.jpg'
import egg from '@/img/items/egg.jpg'
import feather from '@/img/items/feather.jpg'
import chicken from '@/img/items/chicken.jpg'
import milk from '@/img/items/milk.jpg'
import beef from '@/img/items/beef.jpg'
import leather from '@/img/items/leather.jpg'
import wool from '@/img/items/wool.jpg'
import pork from '@/img/items/pork.jpg'
import sheep_meat from '@/img/items/sheep_meat.jpg'
import fat from '@/img/items/fat.jpg'
import beehive from '@/img/items/beehive.jpg'

function axpPerHur(time, xp){
      // Extraer minutos y segundos usando regex para detectar ambos formatos
  const minutesMatch = time.match(/(\d+)\s*m/);
  const secondsMatch = time.match(/(\d+)\s*s/);

  const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;
  const seconds = secondsMatch ? parseInt(secondsMatch[1], 10) : 0;

  // Convertir el tiempo total a horas
  const totalHours = (minutes * 60 + seconds) / 3600;

  // Calcular la XP por hora
  const xpPerHour = (xp / totalHours).toFixed(2);

  return xpPerHour;
}


const axp = [
     {
        name:"Hummer Hut Lv 1",
        img: hummer_hut_1,
        imgspecial:"",
        atia:"3",
        axp:"155",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 155),
     },
     {
        name:"Hummer Hut Lv 2",
        img: hummer_hut_2,
        imgspecial:"",
        atia:"4",
        axp:"303",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 303),
     },
     {
        name:"Hummer Hut Lv 3",
        img: hummer_hut_3,
        imgspecial:"",
        atia:"5",
        axp:"460",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 460),
     },
     {
        name:"Hummer Hut Lv 4",
        img: hummer_hut_4,
        imgspecial:"",
        atia:"6",
        axp:"567",
        time:"18m",
        axpHour: axpPerHur("18m", 567),
     },
     {
        name:"Hummer Hut Lv 5",
        img: hummer_hut_4,
        imgspecial:"",
        atia:"9",
        axp:"991",
        time:"22m 30s",
        axpHour: axpPerHur("22m 30s", 991),
     },
     {
        name:"Protector's Pledge Lv 1",
        img: protector_pledge_1,
        imgspecial:"",
        atia:"3",
        axp:"155",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 155),
     },
     {
        name:"Protector's Pledge Lv 2",
        img: protector_pledge_2,
        imgspecial:"",
        atia:"4",
        axp:"303",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 303),
     },
     {
        name:"Protector's Pledge Lv 3",
        img: protector_pledge_3,
        imgspecial:"",
        atia:"5",
        axp:"460",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 460),
     },
     {
        name:"Protector's Pledge Lv 4",
        img: protector_pledge_4,
        imgspecial:"",
        atia:"6",
        axp:"567",
        time:"18m",
        axpHour: axpPerHur("18m", 567),
     },
     {
        name:"Protector's Pledge Lv 5",
        img: protector_pledge_4,
        imgspecial:"",
        atia:"9",
        axp:"991",
        time:"22m 30s",
        axpHour: axpPerHur("22m 30s", 991),
     },
     {
        name:"Fantasy Facets Lv 1",
        img: fantasy_facets_1,
        imgspecial:"",
        atia:"5",
        axp:"196",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 196),
     },
     {
        name:"Fantasy Facets Lv 2",
        img: fantasy_facets_2,
        imgspecial:"",
        atia:"6",
        axp:"336",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 336),
     },
     {
        name:"Fantasy Facets Lv 3",
        img: fantasy_facets_3,
        imgspecial:"",
        atia:"7",
        axp:"510",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 510),
     },
     {
        name:"Fantasy Facets Lv 4",
        img: fantasy_facets_4,
        imgspecial:"",
        atia:"8",
        axp:"718",
        time:"18m",
        axpHour: axpPerHur("18m", 718),
     },
     {
        name:"Cuddle Kitchen Lv 1",
        img: protector_pledge_1,
        imgspecial:"",
        atia:"2",
        axp:"139",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 139),
     },
     {
        name:"Cuddle Kitchen Lv 2",
        img: protector_pledge_2,
        imgspecial:"",
        atia:"3",
        axp:"239",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 239),
     },
     {
        name:"Cuddle Kitchen Lv 3",
        img: protector_pledge_3,
        imgspecial:"",
        atia:"4",
        axp:"362",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 362),
     },
     {
        name:"Cuddle Kitchen Lv 4",
        img: protector_pledge_4,
        imgspecial:"",
        atia:"5",
        axp:"510",
        time:"18m",
        axpHour: axpPerHur("18m", 510),
     },
     {
        name:"Cuddle Kitchen Lv 5",
        img: protector_pledge_4,
        imgspecial:"",
        atia:"9",
        axp:"717",
        time:"22m 30s",
        axpHour: axpPerHur("22m 30s", 717),
     },
     {
        name:"Big Boomer Lv 1",
        img: big_boomer_1,
        imgspecial: cotton_paper,
        atia:"5",
        axp:"201",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 201),
     },
     {
        name:"Big Boomer Lv 1",
        img: big_boomer_1,
        imgspecial:"",
        atia:"5",
        axp:"286",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 286),
     },
     {
        name:"Big Boomer Lv 2",
        img: big_boomer_2,
        imgspecial:"",
        atia:"6",
        axp:"447",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 447),
     },
     {
        name:"Big Boomer Lv 3",
        img: big_boomer_3,
        imgspecial:"",
        atia:"7",
        axp:"457",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 457),
     },
     {
        name:"Big Boomer Lv 4",
        img: big_boomer_4,
        imgspecial:"",
        atia:"8",
        axp:"642",
        time:"18m",
        axpHour: axpPerHur("18m", 642),
     },
     {
        name:"Polisher Precision Lv 1",
        img: polisher_precision_1,
        imgspecial: "",
        atia:"4",
        axp:"72",
        time:"4m",
        axpHour: axpPerHur("4m", 72),
     },
     {
        name:"Polisher Precision Lv 2",
        img: polisher_precision_2,
        imgspecial:"",
        atia:"5",
        axp:"83",
        time:"3m 20s",
        axpHour: axpPerHur("3m 20s", 83),
     },
     {
        name:"Polisher Precision Lv 3",
        img: polisher_precision_3,
        imgspecial:"",
        atia:"6",
        axp:"83",
        time:"3m 20s",
        axpHour: axpPerHur("3m 20s", 83),
     },
     {
        name:"Polisher Precision Lv 4",
        img: polisher_precision_4,
        imgspecial:"",
        atia:"8",
        axp:"83",
        time:"3m 20s",
        axpHour: axpPerHur("3m 20s", 83),
     },
     {
        name:"Bubbling Bar Lv 1",
        img: bubbling_bar_1,
        imgspecial: "",
        atia:"4",
        axp:"177",
        time:"7m 53s",
        axpHour: axpPerHur("7m 53s", 177),
     },
     {
        name:"Bubbling Bar Lv 2",
        img: bubbling_bar_2,
        imgspecial:"",
        atia:"5",
        axp:"303",
        time:"11m 15s",
        axpHour: axpPerHur("11m 15s", 303),
     },
     {
        name:"Bubbling Bar Lv 3",
        img: bubbling_bar_3,
        imgspecial:"",
        atia:"6",
        axp:"403",
        time:"14m 38s",
        axpHour: axpPerHur("14m 38s", 403),
     },
     {
        name:"Bubbling Bar Lv 4",
        img: bubbling_bar_4,
        imgspecial:"",
        atia:"7",
        axp:"567",
        time:"18m",
        axpHour: axpPerHur("18m", 567),
     },
     {
        name:"Forger's Furnace Lv 1",
        img: forger_furnace_1,
        imgspecial: "",
        atia:"2",
        axp:"35",
        time:"3m",
        axpHour: axpPerHur("3m", 35),
     },
     {
        name:"Forger's Furnace Lv 2",
        img: forger_furnace_2,
        imgspecial: iron_ingot,
        atia:"4",
        axp:"42",
        time:"3m",
        axpHour: axpPerHur("3m", 42),
     },
     {
        name:"Forger's Furnace Lv 2",
        img: forger_furnace_2,
        imgspecial: bronze_ingot,
        atia:"4",
        axp:"56",
        time:"4m",
        axpHour: axpPerHur("4m", 56),
     },
     {
        name:"Forger's Furnace Lv 3",
        img: forger_furnace_3,
        imgspecial: steel_ingot,
        atia:"5",
        axp:"66",
        time:"4m",
        axpHour: axpPerHur("4m", 66),
     },
     {
        name:"Forger's Furnace Lv 3",
        img: forger_furnace_3,
        imgspecial: silver_ingot,
        atia:"5",
        axp:"88",
        time:"5m 20s",
        axpHour: axpPerHur("5m 20s", 88),
     },
     {
        name:"Forger's Furnace Lv 4",
        img: forger_furnace_4,
        imgspecial: gold_ingot,
        atia:"6",
        axp:"100",
        time:"5m 20s",
        axpHour: axpPerHur("5m 20s", 100),
     },
     {
        name:"Forger's Furnace Lv 4",
        img: forger_furnace_4,
        imgspecial: platinum_dust,
        atia:"6",
        axp:"86",
        time:"4m",
        axpHour: axpPerHur("4m", 86),
     },
     {
        name:"Forger's Furnace Lv 5",
        img: forger_furnace_4,
        imgspecial: platinum_ingot,
        atia:"9",
        axp:"129",
        time:"5m 20s",
        axpHour: axpPerHur("5m 20s", 129),
     },
     {
        name:"Coal Kiln Lv 1",
        img: coal_kiln_1,
        imgspecial: "",
        atia:"2",
        axp:"36",
        time:"4m",
        axpHour: axpPerHur("4m", 36),
     },
     {
        name:"Coal Kiln Lv 2",
        img: coal_kiln_2,
        imgspecial: "",
        atia:"3",
        axp:"43",
        time:"4m",
        axpHour: axpPerHur("4m", 43),
     },
     {
        name:"Coal Kiln Lv 3",
        img: coal_kiln_3,
        imgspecial: "",
        atia:"4",
        axp:"50",
        time:"4m",
        axpHour: axpPerHur("4m", 50),
     },
     {
        name:"Coal Kiln Lv 4",
        img: coal_kiln_4,
        imgspecial: "",
        atia:"6",
        axp:"57",
        time:"4m",
        axpHour: axpPerHur("4m", 57),
     },
     {
        name:"Animal Pasture Lv 1",
        img: animal_pasture_1,
        imgspecial: egg,
        atia:"3",
        axp:"25",
        time:"2m",
        axpHour: axpPerHur("2m", 25),
     },
     {
        name:"Animal Pasture Lv 1",
        img: animal_pasture_1,
        imgspecial: chicken,
        atia:"3",
        axp:"51",
        time:"4m",
        axpHour: axpPerHur("4m", 51),
     },
     {
        name:"Animal Pasture Lv 1",
        img: animal_pasture_1,
        imgspecial: feather,
        atia:"3",
        axp:"38",
        time:"3m",
        axpHour: axpPerHur("3m", 38),
     },
     {
        name:"Animal Pasture Lv 2",
        img: animal_pasture_2,
        imgspecial: pork,
        atia:"4",
        axp:"61",
        time:"4m",
        axpHour: axpPerHur("4m", 61),
     },
     {
        name:"Animal Pasture Lv 2",
        img: animal_pasture_2,
        imgspecial: fat,
        atia:"4",
        axp:"30",
        time:"2m",
        axpHour: axpPerHur("2m", 30),
     },
     {
        name:"Animal Pasture Lv 2",
        img: animal_pasture_2,
        imgspecial: beehive,
        atia:"4",
        axp:"122",
        time:"8m",
        axpHour: axpPerHur("8m", 122),
     },
     {
        name:"Animal Pasture Lv 3",
        img: animal_pasture_3,
        imgspecial: milk,
        atia:"4",
        axp:"47",
        time:"2m 40s",
        axpHour: axpPerHur("2m 40s", 47),
     },
     {
        name:"Animal Pasture Lv 3",
        img: animal_pasture_3,
        imgspecial: beef,
        atia:"4",
        axp:"95",
        time:"5m 20s",
        axpHour: axpPerHur("5m 20s", 95),
     },
     {
        name:"Animal Pasture Lv 3",
        img: animal_pasture_3,
        imgspecial: leather,
        atia:"4",
        axp:"53",
        time:"3m",
        axpHour: axpPerHur("3m", 53),
     },
     {
        name:"Animal Pasture Lv 4",
        img: animal_pasture_4,
        imgspecial: sheep_meat,
        atia:"5",
        axp:"109",
        time:"5m 20s",
        axpHour: axpPerHur("5m 20s", 109),
     },
     {
        name:"Animal Pasture Lv 4",
        img: animal_pasture_4,
        imgspecial: wool,
        atia:"5",
        axp:"61",
        time:"3m",
        axpHour: axpPerHur("3m", 61),
     },

     {
        name:"Grain Grinder Lv 1",
        img: grain_grinder_1,
        imgspecial: "",
        atia:"3",
        axp:"39",
        time:"4m",
        axpHour: axpPerHur("4m", 39),
     },
     {
        name:"Grain Grinder Lv 2",
        img: grain_grinder_2,
        imgspecial: "",
        atia:"4",
        axp:"47",
        time:"4m",
        axpHour: axpPerHur("4m", 47),
     },
     {
        name:"Grain Grinder Lv 3",
        img: grain_grinder_3,
        imgspecial: "",
        atia:"4",
        axp:"55",
        time:"4m",
        axpHour: axpPerHur("4m", 55),
     },
     {
        name:"Grain Grinder Lv 4",
        img: grain_grinder_4,
        imgspecial: "",
        atia:"5",
        axp:"63",
        time:"4m",
        axpHour: axpPerHur("4m", 63),
     },
]

export { axp }