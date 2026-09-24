import { products } from './data';
export const CART_KEY = "lunera_cart";
export const WISHLIST_KEY = "lunera_wishlist";
export const ORDER_KEY = "lunera_orders";

export function getCart() {
  try {
    const cart = JSON.parse(localStorage.getItem(CART_KEY));
    return Array.isArray(cart) ? cart : [];
  } catch { return []; }
}
export function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event("cart-updated"));
}
export function cartCount(cart=getCart()) {
  return cart.reduce((n,item)=>n + Number(item.quantity || 0), 0);
}
export function addToCart(product, quantity=1) {
  const cart = getCart();
  const existing = cart.find(item=>item.id===product.id);
  if (existing) existing.quantity = Math.min(existing.quantity + quantity, product.stock);
  else cart.push({id:product.id,name:product.name,price:product.price,image:product.image,quantity});
  saveCart(cart);
}
export function updateQuantity(id, delta) {
  const cart=getCart();
  const item=cart.find(x=>x.id===id);
  if(!item) return;
  item.quantity += delta;
  const product = products.find(x=>x.id===id);
  if(product) item.quantity=Math.min(item.quantity, product.stock);
  if(item.quantity<=0) return saveCart(cart.filter(x=>x.id!==id));
  saveCart(cart);
}
export function removeFromCart(id) { saveCart(getCart().filter(x=>x.id!==id)); }
export function getWishlist() {
  try { const x=JSON.parse(localStorage.getItem(WISHLIST_KEY)); return Array.isArray(x)?x:[]; }
  catch { return []; }
}
export function toggleWishlist(id) {
  const list=getWishlist();
  const next=list.includes(id)?list.filter(x=>x!==id):[...list,id];
  localStorage.setItem(WISHLIST_KEY,JSON.stringify(next));
  return next;
}
