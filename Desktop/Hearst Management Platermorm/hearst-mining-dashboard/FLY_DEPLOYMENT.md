# 🚀 DEPLOIEMENT FLY.IO — HEARST MINING DASHBOARD

## 📋 Prérequis

```bash
# 1. Installer Fly CLI
curl -L https://fly.io/install.sh | sh

# 2. S'authentifier
flyctl auth login

# 3. Cloner/Télécharger le projet
```

---

## 🛠️ Structure du Projet

```
hearst-mining-dashboard/
├── DASHBOARD__52_.html      # Dashboard principal
├── Dockerfile              # Configuration Docker
├── nginx.conf              # Configuration Nginx
├── fly.toml                # Configuration Fly.io
└── README.md               # Ce fichier
```

---

## 🚀 DÉPLOIEMENT RAPIDE (3 étapes)

### **Étape 1 : Préparer les fichiers**

```bash
# Créer le dossier du projet
mkdir hearst-mining-dashboard
cd hearst-mining-dashboard

# Copier les fichiers
cp DASHBOARD__52_.html .
cp Dockerfile .
cp nginx.conf .
cp fly.toml .
```

### **Étape 2 : Initialiser l'app Fly**

```bash
# Option A : Utiliser la config existante (recommandé)
flyctl deploy --config fly.toml

# Option B : Créer une nouvelle app
flyctl apps create hearst-mining-dashboard
flyctl deploy
```

### **Étape 3 : Lancer le déploiement**

```bash
# Déployer
flyctl deploy

# Vérifier le statut
flyctl status

# Voir les logs
flyctl logs

# Ouvrir l'app en ligne
flyctl open
```

---

## 📊 Après le Déploiement

### **URL Publique**
```
https://hearst-mining-dashboard.fly.dev
```

### **Commandes Utiles**

```bash
# Voir le statut
flyctl status

# Voir les logs en temps réel
flyctl logs -f

# Redéployer après modifications
flyctl deploy

# Accès SSH (debugging)
flyctl ssh console

# Réduire (machine plus petite)
flyctl scale vm memory 256 --process-group app

# Augmenter (machine plus grosse)
flyctl scale vm memory 512 --process-group app
```

---

## 🔧 Configuration Recommandée

### **Région**
- **CDG** (Paris) — recommandé pour EU
- **LHR** (Londres)
- **DUB** (Dublin)
- **ORD** (Chicago)
- **SFO** (San Francisco)

### **Changer la région**
```bash
flyctl regions set cdg
# ou
flyctl regions set iad
```

### **Scaling**
```bash
# 1 machine minimum (gratuit)
flyctl scale count 1

# Ou spécifier le type
flyctl scale vm shared-cpu-1x
```

---

## 💾 Mises à Jour

### **Modifier le Dashboard**

```bash
# 1. Modifier DASHBOARD__52_.html localement
# 2. Redéployer
flyctl deploy

# Ça c'est tout ! 🎉
```

---

## 🎨 Domaine Personnalisé (Optionnel)

```bash
# Ajouter un domaine
flyctl certs create mining.example.com

# Vérifier
flyctl certs list

# Voir les DNS records à configurer
flyctl certs show mining.example.com
```

---

## 📊 Monitoring

### **Tableau de bord**
```
https://fly.io/dashboard
```

### **Métriques**
```bash
# CPU / Memory usage
flyctl status

# Logs détaillés
flyctl logs -f --region cdg
```

---

## 🔐 Sécurité

✅ **HTTPS automatique** — Let's Encrypt
✅ **Headers de sécurité** — HSTS, X-Frame-Options, etc.
✅ **Compression** — Gzip activée
✅ **Cache** — Assets cachés 30 jours

---

## 💰 Coûts

**Plan Gratuit Fly.io :**
- ✅ 3 shared-cpu-1x machines
- ✅ 3GB RAM total
- ✅ 160GB storage total
- ✅ HTTPS automatique
- ✅ Support de la communauté

**Estimation :** 0-5$ USD/mois si dépassement

---

## ❌ Troubleshooting

### **Erreur : "App already exists"**
```bash
flyctl apps list  # Voir les apps
flyctl apps destroy hearst-mining-dashboard  # Supprimer l'ancienne
flyctl deploy  # Redéployer
```

### **Erreur : "Not authenticated"**
```bash
flyctl auth login  # Se réauthentifier
flyctl auth token  # Vérifier le token
```

### **App très lente**
```bash
flyctl scale vm memory 512  # Augmenter la RAM
flyctl scale count 2  # Ajouter une machine
```

### **Port 8080 non accessible**
Vérifier le `Dockerfile` : `EXPOSE 8080` ✅
Vérifier `fly.toml` : `internal_port = 8080` ✅

---

## 📞 Support

- **Documentation** : https://fly.io/docs
- **Community** : https://community.fly.io
- **Status** : https://status.fly.io

---

## ✨ C'est en ligne !

Une fois déployé, partage l'URL :
```
🌐 https://hearst-mining-dashboard.fly.dev
```

**Bon déploiement ! 🚀**
