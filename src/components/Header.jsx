import styles from '../styles/Header.module.css'

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.container_logo}>
        <img src="/logo.svg" alt="Logo Sneakers"></img>
        <ul className={styles.links}>
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className={styles.user}>
        <img src="/icon-cart.svg" alt="Ícone Carrinho de Compras"></img>
        <img className={styles.avatar} src="image-avatar.png" alt="Avatar"></img>
      </div>
    </header>
  )
}

export default Header