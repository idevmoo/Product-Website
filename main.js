// General Style
document.body.style.cssText = "margin: 0; font-family: Tahoma, Arial; background-color: rgb(236, 236, 236);";

// Function to create element
const create = el => document.createElement(el);

// Create Header
const header = create("header");
const logo = create("h1");
const menu = create("ul");
header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
logo.textContent = "iDevMo";
header.append(logo, menu);
document.body.append(header);

// Add menu items
const menuItems = ["Home", "Service", "About", "Contact"];
const menuFragment = document.createDocumentFragment();

menuItems.forEach((item, index) => {
  const menuList = create("li");
  const links = create("a");

  menuList.className = "menu-list";
  links.className = `link-${index + 1}`;
  links.textContent = item;
  links.style.cssText = "cursor: pointer";

  menuList.append(links);
  menuFragment.append(menuList);
});

menu.append(menuFragment);

// Header Style
header.style.cssText = "display: flex; height: 75px; align-items: center; justify-content: space-between; padding: 0 20px; background-color: rgb(255, 255, 255);";
logo.style.cssText = "color: rgb(0, 155, 85);";
menu.style.cssText = "display: flex; justify-content: space-between; gap: 15px; list-style: none; padding: 0; margin: 0;";

// Create Content
const content = create("div");
content.className = "content";
document.body.append(content);

const contentFragment = document.createDocumentFragment();
for (let i = 1; i <= 15; i++) {
  const prodBox = create("div");
  const prodNum = create("span");

  prodBox.className = "product";
  prodBox.textContent = "Product";
  prodNum.textContent = `${i}`;

  prodBox.prepend(prodNum);
  contentFragment.append(prodBox);

  // Product Style
  prodBox.style.cssText = "color: rgb(136, 136, 136); padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); min-width: 190px; border-radius: 0.5rem; box-sizing: border-box; text-align: center;";
  prodNum.style.cssText = "display: block; color: rgb(0, 0, 0); font-size: 40px; margin-bottom: 20px;";
}

content.append(contentFragment);

// Content Style
content.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; box-sizing: border-box; min-height: calc(100vh - 142px);";

// Create Footer
const footer = create("footer");
footer.className = "footer";
footer.textContent = "Copyright 2024 iDevMo";
document.body.append(footer);

// Footer Style
footer.style.cssText = "background-color: rgb(0, 155, 85); color: rgb(255, 255, 255); font-size: 30px; font-weight: bold; text-align: center; padding: 10px;";