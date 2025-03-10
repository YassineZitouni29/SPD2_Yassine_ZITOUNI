<template>
<div id="app">
        <header>
            <h1>Les Bonnes Pièces</h1>
        </header>
        <div class="panier-container">
            <button class="panier-button" @click="togglePanier"> Voir le panier</button>
            <div class="panier" :class="{ visible: panierVisible }">
                <h3> Panier</h3>
                <ul>
                    <li v-for="(item, index) in panier" :key="index">
                        {{ item.nom }} - {{ item.prix }} €
                        <button class="delete-button" @click="supprimerDuPanier(index)">✖</button>
                    </li>
                </ul>
                <p v-if="panier.length === 0">Votre panier est vide.</p>
            </div>
        </div>
        <main>
            <aside class="filtres">
                <h3>Filtres de Recherche</h3>
                <div>
                    <input type="text" v-model="recherche" placeholder="Recherche des produits">
                </div>
                <div>
                    <label for="categorie">Catégorie</label>
                    <select v-model="categorie" id="categorie">
                        <option value="">Toutes catégories</option>
                        <option v-for="p in categories" :key="p" :value="p">{{ p }}</option>
                    </select>
                </div>
                <div>
                    <label for="disponible">Disponibilité</label>
                    <input type="checkbox" v-model="disponible" id="disponible">
                </div> 
                <div>
                    <label for="trier">Trier par</label>
                    <select v-model="trier" id="trier">
                        <option value="">Trier par</option>
                        <option value="croissant">Prix croissant</option>
                        <option value="decroissant">Prix décroissant</option>
                    </select>
                </div>
            </aside>
            
            <section class="fiches">
                <div v-for="piece in piecesFiltrees" :key="piece.id" class="fiche">
                    <img :src="piece.image" :alt="piece.nom">
                    <h4>{{ piece.nom }}</h4>
                    <p><strong>{{ piece.prix }} €</strong></p>
                    <p v-if="piece.disponible" style="color:green;">✔ En stock</p>
                    <p v-else style="color: red;">✖ Rupture de stock</p>
                    <button @click="ajouterAuPanier(piece)" :disabled="!piece.disponible">Ajouter au panier</button>
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default{
            data() {
                return {
                    pieces: [], 
                    recherche: '', 
                    categorie: '', 
                    disponible: false, 
                    trier: '', 
                    panier: [],
                    panierVisible: false
                };
            },
            computed: {
                piecesFiltrees() {
                    let resultat = [...this.pieces];
                    if (this.recherche) {
                        resultat = resultat.filter(piece =>
                            piece.nom.toLowerCase().includes(this.recherche.toLowerCase())
                        );
                    }
                    if (this.categorie) {
                        resultat = resultat.filter(piece => piece.categorie === this.categorie);
                    }
                    if (this.disponible) {
                        resultat = resultat.filter(piece => piece.disponible);
                    }
                    if (this.trier === 'croissant') {
                        resultat.sort((a, b) => a.prix - b.prix);
                    } else if (this.trier === 'decroissant') {
                        resultat.sort((a, b) => b.prix - a.prix);
                    }
                    return resultat;
                },
                categories() {
                    return [...new Set(this.pieces.map(piece => piece.categorie))];
                }
            },
            methods: {
                ajouterAuPanier(piece) {
                    this.panier.push(piece);
                },
                supprimerDuPanier(index) {
                    this.panier.splice(index, 1);
                },
                togglePanier() {
                    this.panierVisible = !this.panierVisible;
                }
            },
            mounted() {
                fetch('./pieces-autos.json')
                    .then(response => response.json())
                    .then(data => {
                        this.pieces = data.map(piece => ({
                            ...piece,
                            disponible: Math.random() > 0.5,
                            image: `image_${piece.nom.toLowerCase().replace(/\s+/g, '_')}.jpg`
                        }));
                    });
            }
};
</script>
<style>
body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        header {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #333;
            color: white;
            padding: 20px;
        }
        header img {
            height: 50px;
            margin-right: 15px;
        }
        main {
            display: flex;
            padding: 20px;
        }
        .filtres {
            width: 250px;
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-right: 20px;
        }
        .fiches {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            flex: 1;
        }
        .fiche {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            transition: transform 0.2s;
        }
        .fiche:hover {
            transform: scale(1.05);
        }
        .fiche img {
            max-width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 5px;
        }
        .panier-container {
            position: fixed;
            top: 20px;
            right: 20px;
            width: 250px;
        }
        .panier {
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            display: none;
        }
        .panier.visible {
            display: block;
        }
        .panier-button {
            background: #007bff;
            color: white;
            padding: 10px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            width: 100%;
        }
        .delete-button {
            background: red;
            color: white;
            padding: 5px;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin-left: 10px;
        }
        input, select{
            width: 100%;
            height: 20px;
            border-style: solid;
            border-radius: 2px;
            margin-bottom: 6px;
        }
</style>
