import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { cartCount } from '../store';

export default function Header({admin=false}) {
  const [count,setCount]=useState(cartCount()), [searchOpen,setSearchOpen]=useState(false), [query,setQuery]=useState('');
  const nav=useNavigate(), location=useLocation();
  useEffect(()=>{const u=()=>setCount(cartCount()); window.addEventListener('cart-updated',u); window.addEventListener('storage',u); return()=>{window.removeEventListener('cart-updated',u);window.removeEventListener('storage',u)}},[]);
  const submit=e=>{e.preventDefault();if(query.trim())nav(`/shop?search=${encodeURIComponent(query.trim())}`);setSearchOpen(false)};
  if(admin) return <header className="admin-header"><Link className="admin-brand" to="/admin"><span></span>LUNÉRA <small>ADMIN</small></Link><div className="admin-header-actions"><Link className="view-shop" to="/">View shop →</Link></div></header>;
  return <><div className="topbar">Free shipping on rituals over $100 · thoughtfully made in small batches</div>
  <header className="site-header"><Link className="brand" to="/"><span className="brand-mark"></span><span className="serif">LUNÉRA</span></Link>
  <nav className="desktop-nav"><Link className={location.pathname==='/shop'?'active':''} to="/shop">Shop</Link><Link className={location.pathname==='/about'?'active':''} to="/about">Our approach</Link><Link to="/shop?category=Ritual%20Sets">Ritual sets</Link></nav>
  <div className="header-actions"><button className="icon-btn" aria-label="Search" onClick={()=>setSearchOpen(v=>!v)}>⌕</button><Link aria-label="Shopping bag" className="icon-btn bag-link" to="/cart">♡ <span className="cart-count">{count}</span></Link><Link aria-label="Admin dashboard" className="icon-btn admin-link" to="/admin">◉</Link></div></header>
  {searchOpen&&<div className="search-bar open"><form className="shell search-inner" onSubmit={submit}><span>⌕</span><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search the collection..."/><button className="btn btn-primary" type="submit">Browse →</button><button type="button" className="icon-btn" onClick={()=>setSearchOpen(false)}>×</button></form></div>}</>
}