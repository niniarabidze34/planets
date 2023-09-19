export const colors = {
    mercury: "#419EBB",
    venus: "#F7CC7F",
    earth: "#545BFE",
    mars: "FF6A45",
    jupiter: "#ECAD7A",
    saturn: "#FCCB6B",
    uranus: "#65F0D5",
    neptune: "#497EFA",
};

export function $(tag){
  return document.getElementById(tag)
}

export const header = $("name");
export const desc = $("desctiption");
export const img = $("planetPic");
export const structure_img = $("innerPic");
export const source = $("wikipedia");
export const overview = $("overview");
export const internalStucture = $("internalStucture");
export const surfaceGeo = $("surfaceGeo");
export const img_folder_path = "img/";
export const rotationTime = $("rotation");
export const revolutionTime = $("revolution");
export const radius = $("radius");
export const avarageTemp = $("temp");