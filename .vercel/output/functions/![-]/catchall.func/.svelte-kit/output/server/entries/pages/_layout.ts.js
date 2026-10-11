import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
const prerender = true;
const ssr = true;
function load({ url }) {
  return {
    url: url.pathname
  };
}
export {
  load,
  prerender,
  ssr
};
