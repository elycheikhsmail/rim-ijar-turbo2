export default {
  nav: {
    home: "Accueil",
    myListings: "Mes annonces",
    addListing: "Ajouter une annonce",
    logout: "Déconnexion",
    login: "Connexion",
    signup: "S'inscrire",
    rimIjar: "Rim Ijar",
    labo: "Labo",
    Avances: "Avances",
    Recherche: "Recherche",
    Annoce: "Tous les anonnces",
  },
  addAnnonce: {
    welcome: "Bienvenue",
    addNew: "Ajouter une annonce",
    mockedData:
      "Les données ne sont pas encore stockées dans la base de données mocked.",
    annonceType: "Type d'annonce",
    selectType: "Sélectionnez un type",
    location: "Location",
    sale: "Vente",
    service: "Service",
    other: "Autre",
    category: "Catégorie",
    selectCategory: "Sélectionnez une catégorie",
    subCategory: "Sous-catégorie",
    selectSubCategory: "Sélectionnez une sous-catégorie",
    description: "Description",
    price: "Prix par jour (€)",
    submitButton: "Ajouter l'annonce",
    categories: {
      immobilier: "Immobilier",
      véhicule: "Automobile",
      Emploi: "Emploi",
    },
    subCategories: {
      Maison: "Maison",
      Appartement: "Appartement",
      Voiture: "Voiture",
      Moto: "Moto",
      CDI: "CDI",
      CDD: "CDD",
    },
    search: "Recherche...",
  },
  pagination: {
    next: "Suivant",
    prev: "Précédent",
    currentPage: "Page",
    of: "sur",
  },
  connexion: {
    title: "Connexion",
    email: "Adresse e-mail",
    password: "Mot de passe",
    loginButton: "Se connecter",
    forgotPassword: "Mot de passe oublié?",
    noAccount: "Vous n'avez pas de compte?",
    createAccount: "Créer un compte",
    invalidCredentials: "Identifiants invalides",
    emailLabel: "email",
    passwordLabel: "password",
    confirmPasswordLabel: "confirm mot de pass",
    submitButton: "connexion",
    passwordsNotMatch: "",
    passwordMinLength: "",
    passwordRequired: "",
    emailInvalid: "",
    emailRequired: "",
    success: "",
    unexpectedError: "",
    error: "",
    sendingData: "",
    validationInProgress: "",
    validationFailed: "",
    passwordShort: "",
  },
  register: {
    title: "Créer un compte",
    firstName: "Prénom",
    lastName: "Nom de famille",
    email: "Adresse e-mail",
    password: "Mot de passe",
    confirmPassword: "Confirmer le mot de passe",
    signupButton: "S'inscrire",
    alreadyHaveAccount: "Vous avez déjà un compte?",
    loginHere: "Se connecter ici",
    passwordMismatch: "Les mots de passe ne correspondent pas",
    accountCreated: "Compte créé avec succès",
    emailLabel: "email",
    passwordLabel: "password",
    confirmPasswordLabel: "confirm mot de pass",
    submitButton: "register",
    passwordsNotMatch: "",
    passwordMinLength: "",
    passwordRequired: "",
    emailInvalid: "",
    emailRequired: "",
    success: "",
  },
  footer: {
    aboutUs: "À propos de nous",
    contact: "Contact",
    privacyPolicy: "Politique de confidentialité",
    termsOfService: "Conditions d'utilisation",
    followUs: "Suivez-nous",
  },
  errors: {
    required: "Ce champ est requis",
    requiredFields: "Ce champ est requis",
    invalidEmail: "Adresse e-mail invalide",
    minLength: "Ce champ doit contenir au moins {min} caractères",
    maxLength: "Ce champ ne peut pas dépasser {max} caractères",
    fetchTypeAnnonces: "Erreur lors de la récupération des types d'annonces",
    fetchCategories: "Erreur lors de la récupération des catégories",
    fetchSubCategories: "Erreur lors de la récupération des sous-catégories",
    createAnnonce: "Erreur lors de la création de l'annonce",
    invalidData: "Données invalides",
    serverError: "Erreur serveur",
    networkError: "Erreur de connexion",
    unexpectedError: "Une erreur inattendue s'est produite",
  },
  successMessages: {
    listingAdded: "L'annonce a été ajoutée avec succès",
    profileUpdated: "Profil mis à jour avec succès",
    passwordChanged: "Mot de passe modifié avec succès",
    annonceCreated: "Annonce créée avec succès",
    dataFetched: "Données récupérées avec succès",
    dataSaved: "Données enregistrées avec succès",
  },
  validation: {
    emailRequired: "L'e-mail est obligatoire",
    passwordRequired: "Le mot de passe est obligatoire",
    invalidPassword: "Le mot de passe doit contenir au moins 8 caractères",
    firstNameRequired: "Le prénom est obligatoire",
    lastNameRequired: "Le nom de famille est obligatoire",
  },
  notifications: {
    creating: "Création de l'annonce en cours...",
    success: "Annonce créée avec succès !",
    error: "Erreur lors de la création de l'annonce",
    successdelete: "L`utilisateur delete avec succees",
    errordelete: "Error lors de deleting l`utilisateur",
    updating: "updating",
  },
  editAnnonce: {
    edit: "edit",
  },
  prix: "Prix",
  Annonces: "Mes Annonces",
  Contact: "contact",
  annonce: "Mon annonce",
  filter: {
    title: "Filtres",
    type: "Type d'annonce",
    category: "Catégorie",
    subcategory: "Sous-catégorie",
    price: "Prix",
    search: "Rechercher",
  },
} as const;
