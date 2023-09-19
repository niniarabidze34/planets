import { render } from "./render.js";
window.addEventListener('load', router);
window.addEventListener('hashchange', router);

function route (path, template) {
    let routes = {};
    return routes[path] = template;
};

export async function get_planet(planet) {
    let response = await fetch('https://planets-api.vercel.app/api/v1/planets/'+planet)
    planet = await response.json();
    render(planet);
};

export function getPlanetName(){
    return window.location.hash.slice(1) || 'mercury';
}

async function router() {
    let planet = getPlanetName()
    get_planet(planet)
};
route('mercury', get_planet);
route('venus', get_planet);
route('earth', get_planet);
route('mars', get_planet);
route('jupiter', get_planet);
route('saturn', get_planet);
route('uranus', get_planet);
route('neptune', get_planet);