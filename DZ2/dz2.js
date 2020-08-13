/***********************************************     2. DZ NBP, MAJA PISKAČ     ***************************************/


// 1. Dohvatiti sve podatke narudžbe 11054 
 
db.orders.find(
	{ "order_id": 11054 }
)

/* izlaz:
{
        "_id" : ObjectId("5e903069515f6f1162f98995"),
        "order_id" : 11054,
        "order_date" : "1998-04-28",
        "required_date" : "1998-05-26",
        "shipped_date" : null,
        "customer" : {
                "name" : "Cactus Comidas para llevar",
                "city" : "Buenos Aires",
                "country" : "Argentina"
        },
        "shipper" : {
                "id" : 1,
                "name" : "Speedy Express"
        },
        "details" : [
                {
                        "product" : {
                                "id" : 33,
                                "name" : "Geitost",
                                "category" : "Dairy Products"
                        },
                        "unit_price" : 2.5,
                        "quantity" : 10,
                        "discount" : 0
                },
                {
                        "product" : {
                                "id" : 67,
                                "name" : "Laughing Lumberjack Lager",
                                "category" : "Beverages"
                        },
                        "unit_price" : 14,
                        "quantity" : 20,
                        "discount" : 0
                }
        ]
}
*/



// 2. Dohvatiti podatke o kupcima, sortirano silazno po državi i uzlazno po gradu, koji su kupovali mliječne proizvode (Dairy Products). Ispisati prvih 15 zapisa. 

db.orders.find( 
	{ "details.product.category" : "Dairy Products" }, 
	{ "_id" : 0, "customer" : 1 } 
).sort({ 
	"customer.country" : -1, 
	"customer.city" : 1 
}).limit(15)

/* izlaz:
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LILA-Supermercado",
                "city" : "Barquisimeto",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "GROSELLA-Restaurante",
                "city" : "Caracas",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LINO-Delicateses",
                "city" : "I. de Margarita",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "LINO-Delicateses",
                "city" : "I. de Margarita",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "HILARION-Abastos",
                "city" : "San Cristóbal",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "HILARION-Abastos",
                "city" : "San Cristóbal",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "HILARION-Abastos",
                "city" : "San Cristóbal",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "HILARION-Abastos",
                "city" : "San Cristóbal",
                "country" : "Venezuela"
        }
}
{
        "customer" : {
                "name" : "HILARION-Abastos",
                "city" : "San Cristóbal",
                "country" : "Venezuela"
        }
}
*/



// 3. Dohvatiti narudžbe u kojima je kupljeno više od 120 istih proizvoda. Ispisati identifikator narudžbe i ime kupca 

db.orders.find( 
	{ "details.unit_price": {$gt:120} }, 
	{ "_id" : 0, "order_id" : 1, "customer.name" : 2 } 
)

/* izlaz:
{ 
	"order_id" : 10329, 
	"customer" : { 
		"name" : "Split Rail Beer & Ale" 
	} 
}
{ 
	"order_id" : 10351, 
	"customer" : { 
		"name" : "Ernst Handel" 
	} 
}
{
	"order_id" : 10353,
	"customer" : {
		"name" : "Piccolo und mehr"
	} 
}
{
	"order_id" : 10360,
	"customer" : {
		"name" : "Blondesddsl père et fils"
	}
}
{
	"order_id" : 10372,
	"customer" : {
		"name" : "Queen Cozinha"
	}
}
{
	"order_id" : 10417,
	"customer" : {
		"name" : "Simons bistro"
	}
}
{
	"order_id" : 10424,
	"customer" : {
		"name" : "Mère Paillarde"
	}
}
{
	"order_id" : 10479,
	"customer" : {
		"name" : "Rattlesnake Canyon Grocery"
	}
}
{
	"order_id" : 10510,
	"customer" : {
		"name" : "Save-a-lot Markets"
	}
}
{
	"order_id" : 10518,
	"customer" : {
		"name" : "Tortuga Restaurante"
	}
}
{
	"order_id" : 10540,
	"customer" : {
		"name" : "QUICK-Stop"
	}
}
{
	"order_id" : 10541,
	"customer" : {
		"name" : "Hanari Carnes"
	}
}
{
	"order_id" : 10583,
	"customer" : {
		"name" : "Wartian Herkku"
	}
}
{
	"order_id" : 10616,
	"customer" : {
		"name" : "Great Lakes Food Market"
	}
}
{
	"order_id" : 10624,
	"customer" : {
		"name" : "The Cracker Box"
	}
}
{
	"order_id" : 10629,
	"customer" : {
		"name" : "Godos Cocina Típica"
	}
}
{
	"order_id" : 10666,
	"customer" : {
		"name" : "Richter Supermarkt"
	}
}
{
	"order_id" : 10672,
	"customer" : {
		"name" : "Berglunds snabbköp" 
	}
}
{
	"order_id" : 10687,
	"customer" : {
		"name" : "Hungry Owl All-Night Grocers"
	}
}
{
	"order_id" : 10691,
	"customer" : {
		"name" : "QUICK-Stop"
	}
}
{ 
	"order_id" : 10698,
	"customer" : {
		"name" : "Ernst Handel"
	}
}
{
	"order_id" : 10772,
	"customer" : {
		"name" : "Lehmanns Marktstand"
	}
}
{
	"order_id" : 10783,
	"customer" : {
		"name" : "Hanari Carnes"
	}
}
{
	"order_id" : 10787,
	"customer" : {
		"name" : "La maison d'Asie"
	}
}
{
	"order_id" : 10791,
	"customer" : {
		"name" : "Frankenversand"
	}
}
{
	"order_id" : 10801,
	"customer" : {
		"name" : "Bólido Comidas preparadas"
	}
}
{
	"order_id" : 10805,
	"customer" : {
		"name" : "The Big Cheese"
	}
}
{ 
	"order_id" : 10816,
	"customer" : {
		"name" : "Great Lakes Food Market"
	}
}
{
	"order_id" : 10817,
	"customer" : {
		"name" : "Königlich Essen"
	}
}
{
	"order_id" : 10828,
	"customer" : {
		"name" : "Rancho grande"
	}
}
{
	"order_id" : 10831,
	"customer" : {
		"name" : "Santé Gourmet"
	}
}
{
	"order_id" : 10834,
	"customer" : {
		"name" : "Tradição Hipermercados"
 	}
}
{
	"order_id" : 10857,
	"customer" : {
		"name" : "Berglunds snabbköp"
	}
}
{
	"order_id" : 10865,
	"customer" : {
		"name" : "QUICK-Stop"
	}
}
{
	"order_id" : 10889,
	"customer" : {
		"name" : "Rattlesnake Canyon Grocery"
	}
}
{
	"order_id" : 10893,
	"customer" : {
		"name" : "Königlich Essen"
	}
}
{
	"order_id" : 10897,
	"customer" : {
		"name" : "Hungry Owl All-Night Grocers"
	}
}
{
	"order_id" : 10912,
	"customer" : {
		"name" : "Hungry Owl All-Night Grocers"
	}
}
{
	"order_id" : 10964,
	"customer" : {
		"name" : "Spécialités du monde"
	}
}
{
	"order_id" : 10971,
	"customer" : {
		"name" : "France restauration" 
	}
}
{
	"order_id" : 10981,
	"customer" : {
		"name" : "Hanari Carnes"
	}
}
{
	"order_id" : 10993,
	"customer" : {
		"name" : "Folk och fä HB" 
	}
}
{
	"order_id" : 11006,
	"customer" : {
		"name" : "Great Lakes Food Market"
	}
}
{
	"order_id" : 11007,
	"customer" : {
		"name" : "Princesa Isabel Vinhos" 
	}
}
{
	"order_id" : 11030,
	"customer" : {
		"name" : "Save-a-lot Markets" 
	}
}
{
	"order_id" : 11032,
	"customer" : {
		"name" : "White Clover Markets" 
	}
}
*/



// 4. Obrisati sve narudžbe iz Švedske 

db.orders.remove( 
	{"customer.country" : "Sweden"}
)

/* izlaz:
WriteResult({ "nRemoved" : 37 }) 
*/



// 5. Dohvat broja svih narudžbi koje su napravili kupci iz Londona ili Portugala 

db.orders.count( 
	{ $or:
		[ {"customer.city" : "London"}, 
		  {"customer.country" : "Portugal"} ] 
	})

/* izlaz:
59
*/

// 6. Dohvat svih gradova iz SAD-a iz kojih su pristizale narudžbe. Svaki grad se treba pojaviti samo jednom u listi.

db.orders.distinct( "customer.city", {"customer.country" : "USA"} )

/* izlaz:
[
        "Albuquerque",
        "Anchorage",
        "Boise",
        "Butte",
        "Elgin",
        "Eugene",
        "Kirkland",
        "Lander",
        "Portland",
        "San Francisco",
        "Seattle",
        "Walla Walla"
]  
*/



// 7. Promijeniti naziv države kupca iz USA u SAD (hint: updateMany) 
db.orders.updateMany( 
	{"customer.country" : "USA"},
	{ $set: {"customer.country" : "SAD"} } 
)

/* izlaz:
{ "acknowledged" : true, "matchedCount" : 122, "modifiedCount" : 122 }
*/