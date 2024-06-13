export const adminCredentials = [
  { email: "admin@gmail.com", password: "admin7788" },
];

const data = {
  taxAmount: 200,

  // productData: [
  //   {
  //     id: 1,
  //     img: img1,
  //     title: "CHARCOAL SUIT",
  //     category: "Black Suits",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "The ultimate alternaive to the black suit, deep charcoal.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel \nFlap narrow pockets \nSide Vents \nPants available in slim fit and ultra fit with belt loops \nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 2,
  //     img: img2,
  //     title: "PLUM SUIT",
  //     category: "Various Colors Suits",
  //     price: 3000,
  //     isInStock: false,
  //     description:
  //       "A stunning burgundy suit that compliments the perfect night out.\n\nUltra Fit \nTwo Buttons \nSuper 120's Wool \nSelf Notch Lapel \nNarrow flap pockets \nSide Vents \nPants available in slim fit and ultra fit with belt loops \nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 3,
  //     img: img3,
  //     title: "DUSK BLUE SUIT",
  //     category: "Blue Suits",
  //     price: 2600,
  //     isInStock: true,
  //     description:
  //       "Our softest lightest blue, perfect for summer events.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel \nNarrow flap pockets \nSide Vents \nPants available in slim fit \nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 4,
  //     img: img4,
  //     title: "BLACK SHAWL COLLAR TUXEDO",
  //     category: "Black Tuxedos",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "Show off your figure and dazzle in this ultra fit elegant tuxedo.\n\nUltra Fit \nOne Button \n100% Worsted Wool \nSatin Shawl Lapel\nSatin Besom pockets \nSide Vents \nPants available in slim fit and ultra fit \nAvailable in Men's 34 - 48",
  //   },
  //   {
  //     id: 5,
  //     img: img5,
  //     title: "IVORY TUXEDO",
  //     category: "Various Colors Tuxedos",
  //     price: 2500,
  //     isInStock: true,
  //     description:
  //       "One of the most elegant styles you can wear, ideal for a formal evening.\n\nSlim Fit \nTwo Buttons \nSuper 120's Wool \nSelf Notch Lapel\nNarrow flap pockets \nSide Vents \nPants available in slim fit and ultra fit with belt loops \nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 6,
  //     img: img6,
  //     title: "DUSK BLUE TUXEDO",
  //     category: "Blue Tuxedos",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "The dusk blue tuxedo features a satin framed lapel, add the matching vest for an elegant three piece look.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSatin Framed Peak Lapel\nSatin besom pockets \nSide Vents \nPants available in slim fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 7,
  //     img: img7,
  //     title: "BLACK NOTCH LAPEL SUIT",
  //     category: "Black Suits",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "This classic slim fit all around black suit is ideal for any occasion. Dress it up with a vest for a three piece look.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nBesom pockets\nSide Vents \nPants available modern fit, slim fit, ultra fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 8,
  //     img: img8,
  //     title: "TAN SUIT",
  //     category: "Various Colors Suits",
  //     price: 2400,
  //     isInStock: true,
  //     description:
  //       "The perfect summer tan suit.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nNarrow flap pockets\nSide Vents \nPants available in slim fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 9,
  //     img: img9,
  //     title: "SHARKSKIN GREY SUIT",
  //     category: "Various Colors Suits",
  //     price: 2600,
  //     isInStock: true,
  //     description:
  //       "The ultra fit suit will look grey for an event. Dress it up with a bow tie and matching vest or dress it down with a black shirt.\n\nUltra Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nFlap narrow pockets\nSide Vents \nPants available in slim fit and ultra fit with belt loops\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 10,
  //     img: img10,
  //     title: "INDIGO BLUE TUXEDO",
  //     category: "Blue Tuxedos",
  //     price: 2200,
  //     isInStock: true,
  //     description:
  //       "The James Bond classic tuxedo revisited in the ever so elegant indigo blue.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSatin Notch Lapel\nSatin besom pockets\nSide Vents \nPants available in slim fit and ultra fit\nAvailable in Boy's 3 - Men's 60",
  //   },
  //   {
  //     id: 11,
  //     img: img11,
  //     title: "RED TUXEDO WITH SHAWL COLLAR",
  //     category: "Various Colors Tuxedos",
  //     price: 2600,
  //     isInStock: true,
  //     description:
  //       "Stand out from the crowd with this coloful red tuxedo.\n\nSlim Fit \nOne Buttons \nWosted Wool \nShawl Lapel with Black Satin Trim\nBesom pockets\nCenter Vent \nBlack pants available in modern fit. slim fit and ultra fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 12,
  //     img: img12,
  //     title: "BLUE PAISLEY TUXEDO",
  //     category: "Blue Tuxedos",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "Add fun to your look with this trend paisley blue tuxedo.\n\nUltra Fit\nOne Buttons \nComfort Blend\nSatin Peak Lapel\nSatin besom pockets\nSide Vents \nPants available in black in modern fit, slim fit, and ultra fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 13,
  //     img: img13,
  //     title: "INDIGO BLUE SUIT",
  //     category: "Blue Suits",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "The all-around navy suit. Dress it up or down, wear it tone on tone or with bright colors.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nNarrow flap pockets\nSide Vents \nPants available in slim fit and ultra fit\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 14,
  //     img: img14,
  //     title: "LIGHT GREY SUIT",
  //     category: "Various Colors Suits",
  //     price: 2400,
  //     isInStock: true,
  //     description:
  //       "Our most popular gery suit. Dress it up with a bow tie and matching vest or dress it down with a black shirt.\n\nSlim Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nFlap narrow pockets\nSide Vents \nPants available in slim fit and ultra fit with belt loops\nAvailable in Men's 34 - 60",
  //   },
  //   {
  //     id: 15,
  //     img: img15,
  //     title: "NAVY SUIT",
  //     category: "Blue Suits",
  //     price: 2000,
  //     isInStock: true,
  //     description:
  //       "The classic navy tone on tone suit, ideal for men looking for comfort and timeless elegance.\n\nModern Fit \nTwo Buttons \nSuper 100's Wool \nSelf Notch Lapel\nNarrow flap pockets\nSide Vents \nPants available in modern fit\nAvailable in Men's 34 - 56",
  //   },
  // ],
};

export default data;
