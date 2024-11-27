export const categoryMenuList = [
  {
    id: 1,
    title: "Electronic door lock",
    src: "/digital-door.png",
    href: "/shop/smart-phones"
  },
  {
    id: 2,
    title: "Pin locks",
    src: "/pin lock.png",
    href: "/shop/tablets"
  },
  {
    id: 3,
    title: "Door knobs",
    src: "/door-knob.png",
    href: "/shop/mouses"
  },
  {
    id: 4,
    title: "Door handles",
    src: "/door-handle.png",
    href: "/shop/cameras"
  },
  {
    id: 5,
    title: "handlesets",
    src: "/handleset.png",
    href: "/shop/watches"
  },
  {
    id: 6,
    title: "Key card locks",
    src: "/key-card.png",
    href: "/shop/laptops"
  },
  {
    id: 7,
    title: "Smart doors",
    src: "/smart-door.png",
    href: "/shop/computers"
  },
  {
    id: 8,
    title: "Barn Doors",
    src: "/red-barn.png",
    href: "/shop/printers"
  },
  {
    id: 9,
    title: "Combination locks",
    src: "/combination-lock.png",
    href: "/shop/earbuds"
  },
  {
    id: 10,
    title: "Biometric lock",
    src: "/biometric lock.png",
    href: "/shop/headphones"
  },
];

export const incentives = [
  {
    name: "Free Shipping",
    description:
      "Our shipping is completely free and that is completely good for our customers.",
    imageSrc: "/shipping icon.png",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our support is working all day and night to answer any question you have.",
    imageSrc: "/support icon.png",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "We have super fast shopping experience and you will enjoy it.",
    imageSrc: "/fast shopping icon.png",
  },
];

export const navigation = {
  sale: [
    { name: "Discounts", href: "#" },
    { name: "News", href: "#" },
    { name: "Register Discounts", href: "#" },
  ],
  about: [
    { name: "About Singitronic", href: "#" },
    { name: "Work With Us", href: "#" },
    { name: "Company Profile", href: "#" },
  ],
  buy: [
    { name: "Singitronic Loyalty Card", href: "#" },
    { name: "Terms Of Use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Complaints", href: "#" },
    { name: "Partners", href: "#" },
  ],
  help: [
    { name: "Contact", href: "#" },
    { name: "How to Buy at Singitronic", href: "#" },
    { name: "FAQ", href: "#" },
  ],
};

export const isValidNameOrLastname = (input: string) => {
  // Simple name or lastname regex format check
  const regex = /^[a-zA-Z\s]+$/;
  return regex.test(input);
};

export const isValidEmailAddressFormat = (input: string) => {
  // simple email address format check
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(input);
};

export const isValidCardNumber = (input: string) => {
  // Remove all non-digit characters
  const cleanedInput = input.replace(/[^0-9]/g, "");
  // test for credit card number between 13 and 19 characters
  const regex = /^\d{13,19}$/;
  return regex.test(cleanedInput);
}

export const isValidCreditCardExpirationDate = (input: string) => {
  // simple expiration date format check
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
  return regex.test(input);
};

export const isValidCreditCardCVVOrCVC = (input: string) => {
  // simple CVV or CVC format check
  const regex = /^[0-9]{3,4}$/;
  return regex.test(input);
};
