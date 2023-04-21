import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1jJEVkJJJ5OecY2ouEpPvXbsCaXPxDh8_uQ&usqp=CAU"
        ></img>
      </a>
    </>
  );
};

const NavItems = () => {
  return (
    <>
      <ul className="nav-items">
        <li>Home</li>
        <li>Help</li>
        <li>Profile</li>
      </ul>
    </>
  );
};

const Cart = () => {
  return (
    <>
      <img
        className="cart"
        alt="cart-icon"
        src="https://img.lovepik.com/free-png/20210926/lovepik-shopping-cart-icon-png-image_401486831_wh1200.png"
      ></img>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="left">
        <div className="logo-container">
          <Title />
        </div>
      </div>
      <div className="right">
        <div className="cart-container">
          <Cart />
        </div>
        <div className="nav-items-container">
          <NavItems />
        </div>
      </div>
    </div>
  );
};

const restoData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "145240",
      name: "Al Akbar Fast Food",
      uuid: "56c016f2-4e1c-42c8-a903-01f94628e359",
      city: "3",
      area: "Pathar Gatti",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "srfpm9aknbsmieockm1w",
      cuisines: ["Chinese", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 50,
      minDeliveryTime: 50,
      maxDeliveryTime: 50,
      slaString: "50 MINS",
      lastMileTravel: 3.700000047683716,
      slugs: {
        restaurant: "al-akbar-fast-food-charminar-charminar",
        city: "hyderabad",
      },
      cityState: "3",
      address: "Panjayesh, Beside Armaan hotel, Charminar",
      locality: "Charminar",
      parentId: 19626,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6316111~p=1~eid=00000187-a457-a808-0437-a5970054015d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "145240",
        deliveryTime: 50,
        minDeliveryTime: 50,
        maxDeliveryTime: 50,
        lastMileTravel: 3.700000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "79706",
      name: "Shah Ghouse Cafe & Restaurant",
      uuid: "f1bf3cca-b8ca-43e1-9753-f28a54a8adc0",
      city: "3",
      area: "Charminar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "ggbuknqzqc4qoqfnl2cr",
      cuisines: ["Biryani", "North Indian", "Chinese", "Mughlai", "Tandoor"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 59,
      minDeliveryTime: 59,
      maxDeliveryTime: 59,
      slaString: "59 MINS",
      lastMileTravel: 6,
      slugs: {
        restaurant: "shah-ghouse-cafe-restaurant-shalibanda-charminar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Shah Ali Banda Rd, Opp. Green Garden Function Hall, Syed Ali Chabutra, Zohra Colony, Shalibanda, Hyderabad, Telangana 500065",
      locality: "Opp. Green Garden Function Hall",
      parentId: 18992,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5300,
        message: "",
        title: "Delivery Charge",
        amount: "5300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "79706",
        deliveryTime: 59,
        minDeliveryTime: 59,
        maxDeliveryTime: 59,
        lastMileTravel: 6,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "66023",
      name: "Azam Hotel",
      uuid: "ce8896e9-146d-4879-96e7-a39756a5b6ac",
      city: "3",
      area: "Begumpet",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "svfnhi290mdjfgy8e0ic",
      cuisines: ["Biryani", "North Indian", "Mughlai", "Tandoor"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 59,
      minDeliveryTime: 59,
      maxDeliveryTime: 59,
      slaString: "59 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "azam-hotel-ram-gopalpet-begumpet",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "2-3-1 to 7, Ram Gopalpet, Beside Nallagutta Masjid, M.G. Road, Secunderabad",
      locality: "M.G Road",
      parentId: 38420,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use MATCHPARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off | Use code MATCHPARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHPARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off | Use code MATCHPARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5300,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5300,
        message: "",
        title: "Delivery Charge",
        amount: "5300",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "66023",
        deliveryTime: 59,
        minDeliveryTime: 59,
        maxDeliveryTime: 59,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "233052",
      name: "Oven Story Pizza",
      uuid: "0ba769e9-b879-48b7-a8a5-de636af5f1ce",
      city: "3",
      area: "Abids",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "ab979bffbd658e74de650a15ca0092a3",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 30,
      maxDeliveryTime: 40,
      slaString: "30-40 MINS",
      lastMileTravel: 1.899999976158142,
      slugs: {
        restaurant: "ovenstory-pizza-abids-nampally",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot No 5-9-211/201, Chirag Ali Lane, Nampally, Abids, Hyderabad 500001",
      locality: "Mahesh Nagar",
      parentId: 3534,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6536675~p=4~eid=00000187-a457-a808-0437-a5980054046f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "233052",
        deliveryTime: 35,
        minDeliveryTime: 30,
        maxDeliveryTime: 40,
        lastMileTravel: 1.899999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "88440",
      name: "Hotel Shadab",
      uuid: "61340fdb-cf65-4960-9555-1ac5b2222450",
      city: "3",
      area: "Ghansi Bazaar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "jnlk1pc8ixlqv8cmedsm",
      cuisines: ["Biryani", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 55,
      minDeliveryTime: 55,
      maxDeliveryTime: 55,
      slaString: "55 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "shadab-ghansi-bazaar-charminar",
        city: "hyderabad",
      },
      cityState: "3",
      address:
        "Plot 21, Opposite Madina Building, High Court Road, Ghansi Bazaar, Hyderabad\t\t\t\t\t",
      locality: "High Court Road",
      parentId: 19124,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹125 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
            discountType: "Flat",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3700,
        message: "",
        title: "Delivery Charge",
        amount: "3700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "88440",
        deliveryTime: 55,
        minDeliveryTime: 55,
        maxDeliveryTime: 55,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

const RestoCard = ({ props }) => {
  const { name, cloudinaryImageId, cuisines, avgRating } = props;

  return (
    <div className="card-container">
      <div className="resto-image">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="resto-name">
        <h2>{name}</h2>
      </div>
      <div className="cuisines">
        <span>{cuisines.join()}</span>
      </div>
      <div className="rating">
        <h4>{avgRating} Stars</h4>
      </div>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="resto-card">
      {restoData.map((details) => {
        return <RestoCard props={details.data} key={details.data.id} />;
      })}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
