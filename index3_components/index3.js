import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header
 * - logo
 * - nav items
 * Body
 * - search
 * - restaurantContainer
 *   - restaurantCard
 *   - Img
 *   - Name of res, star rating, cuisines, etc
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 */

const styleCard = {
    backgroundColor: "bisque"
}

const Header = () => {
    return (
        <div className="header" style={{backgroundColor: "Orange"}}>
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAGN6tjw2w8/1/0/1600w/canva-orange-and-yellow-kitchen-food-logo-2G4Q5SFCJ28.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const RestaurantCard = (props) => {
//     const {resName, cuisine} = props;
//     return (
//       <div className="res-card" style={styleCard}>
//         <img className="food" src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505"/>
//         <h3>{resName}</h3>
//         <h4>{props.cuisine}</h4>
//       </div>
//     )
// }

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, cuisines, cloudinaryImageId} = resData?.info;
    return (
      <div className="res-card" style={styleCard}>
        <img className="food" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines[0]}</h4>
      </div>
    )
}

const resList = [
    {
      "info": {
        "id": "1003414",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/5/dc74a4b7-8d63-4eb7-91c9-048973c2cc99_1003414.jpg",
        "locality": "Chhindwara",
        "areaName": "Parasia Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.9,
        "parentId": "721",
        "avgRatingString": "3.9",
        "totalRatingsString": "21",
        "sla": {
          "deliveryTime": 60,
          "lastMileTravel": 12.8,
          "serviceability": "SERVICEABLE",
          "slaString": "60-65 mins",
          "lastMileTravelString": "12.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹99"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "630193",
        "name": "Champaran  Handi Restaurant",
        "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
        "locality": "Sinchai Colony",
        "areaName": "Nagpur road",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.3,
        "parentId": "376324",
        "avgRatingString": "4.3",
        "totalRatingsString": "378",
        "sla": {
          "deliveryTime": 47,
          "lastMileTravel": 11.9,
          "serviceability": "SERVICEABLE",
          "slaString": "45-50 mins",
          "lastMileTravelString": "11.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹89"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "774546",
        "name": "Shree Naivedyam",
        "cloudinaryImageId": "2274f59cb8efcfab1f446b195bcbda3b",
        "locality": "Khajri Road",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "South Indian",
          "Pizzas",
          "Beverages"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "428968",
        "avgRatingString": "4.3",
        "totalRatingsString": "104",
        "sla": {
          "deliveryTime": 50,
          "lastMileTravel": 11.7,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹40 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/shree-naivedyam-khajri-road-chhindwara-city-rest774546",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "213358",
        "name": "Apni Rasoi Family Dhaba",
        "cloudinaryImageId": "sidigb8zqjfrfpkrtqgl",
        "locality": "Vishnu Nagar",
        "areaName": "Parasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Indian",
          "South Indian",
          "Chinese"
        ],
        "avgRating": 4.1,
        "veg": true,
        "parentId": "35024",
        "avgRatingString": "4.1",
        "totalRatingsString": "1.2K+",
        "sla": {
          "deliveryTime": 51,
          "lastMileTravel": 13.9,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "13.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/apni-rasoi-family-dhaba-vishnu-nagar-parasia-road-rest213358",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "151649",
        "name": "Hotel Sai Nath & Sai Restaurant",
        "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
        "locality": "railway station",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages",
          "Fast Food",
          "Desserts"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "101802",
        "avgRatingString": "4.3",
        "totalRatingsString": "957",
        "sla": {
          "deliveryTime": 55,
          "lastMileTravel": 11,
          "serviceability": "SERVICEABLE",
          "slaString": "50-55 mins",
          "lastMileTravelString": "11.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "151648",
        "name": "Mr. Gurung Momo & Chinese Corner",
        "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
        "locality": "Teacher's Colony",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Momos",
          "Chinese",
          "Fast Food"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "140255",
        "avgRatingString": "4.3",
        "totalRatingsString": "1.0K+",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 11.8,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹49"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/mr-gurung-momo-and-chinese-corner-teachers-colony-mohan-nagar-rest151648",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "151661",
        "name": "Bharat Mewad Ice Cream",
        "cloudinaryImageId": "auczcmkdvvxzt2mswvcc",
        "locality": "Teacher's Colony",
        "areaName": "Chhindwara Locality",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "44378",
        "avgRatingString": "4.4",
        "totalRatingsString": "446",
        "sla": {
          "deliveryTime": 40,
          "lastMileTravel": 10.9,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "10.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/bharat-mewad-ice-cream-teachers-colony-chhindwara-locality-rest151661",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "618037",
        "name": "Jai Ganesh Bhojnalaya",
        "cloudinaryImageId": "yzgqriufpzmloogcn2vl",
        "locality": "Railway Colony",
        "areaName": "Bus stand",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Indian",
          "Chinese"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "368432",
        "avgRatingString": "4.0",
        "totalRatingsString": "322",
        "sla": {
          "deliveryTime": 44,
          "lastMileTravel": 11,
          "serviceability": "SERVICEABLE",
          "slaString": "40-45 mins",
          "lastMileTravelString": "11.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-09 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹50 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {
            
          },
          "subTitle": {
            
          },
          "message": {
            
          },
          "customIcon": {
            
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-7af6f6dd-aedb-456f-85b8-33343493aef4"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ]

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-Container">
                {/* <RestaurantCard 
                 resName="KFC"
                 cuisine="Fast Food"
                /> */}

                {/* <RestaurantCard 
                 resData = {resList[0]}
                /> */}

                {resList.map(restaurant => <RestaurantCard key={restaurant.info.id} resData = {restaurant} />)}
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app"> 
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);