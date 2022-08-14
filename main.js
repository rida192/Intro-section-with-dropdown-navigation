function get(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

const toggleBtn = get(".toggle-btn");
const closeBtn = get(".close-btn");
const sideBar = get(".sidebar");
const hero = get(".hero");

const submenu = get(".submenu");
const overlay = get(".overlay");
const desktopSub = get(".desktop-submenu");
const lis = document.querySelectorAll(".li");
const btns = document.querySelectorAll(".link-btn");
const desktopLis = document.querySelectorAll(".desktop-li");

desktopLis.forEach((desktopLi) => {
  desktopLi.addEventListener("mouseenter", (e) => {
    e.currentTarget.classList.add("show");
  });
  desktopLi.addEventListener("mouseleave", (e) => {
    e.currentTarget.classList.remove("show");
    // desktopSub.classList.add("hidden");
    // desktopLi.classList.remove("show");
  });
});

const navAction = (element) => {
  if (element.classList.contains("left-full")) {
    element.classList.remove("left-full");
    element.classList.add("left-1/3");
  } else {
    element.classList.remove("left-1/3");
    element.classList.add("left-full");
  }
};
const overlayAction = (element) => {
  if (element.classList.contains("hidden")) {
    overlay.classList.remove("hidden");
    overlay.classList.add("block");
  } else {
    overlay.classList.remove("block");
    overlay.classList.add("hidden");
  }
};

toggleBtn.addEventListener("click", () => {
  navAction(sideBar);
  overlayAction(overlay);
});
closeBtn.addEventListener("click", () => {
  navAction(sideBar);
  overlayAction(overlay);
});

// hero.addEventListener("click", () => {
//   if (sideBar.classList.contains("left-1/3")) {
//     sideBar.classList.remove("left-1/3");
//     sideBar.classList.add("left-full");
//   }
// });

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!e.currentTarget.parentElement.classList.contains("active")) {
      lis.forEach((li) => {
        li.classList.remove("active");
      });
      e.currentTarget.parentElement.classList.add("active");
    } else {
      e.currentTarget.parentElement.classList.remove("active");
    }
  });
});
