function addAll(){
    var lmts = document.getElementsByClassName('FriendRequestAdd');
    for(var i = 0; i < lmts.length; i++){
        lmts[i].click();
        console.log('Utilisateur Ajouté');
    }
    if(i > lmts.length){
        console.log("Tous les utilisateurs ont été ajoutés, descendez tout en bas et chargez un maximum de personne afin d'ajouter plus de monde");
        alert("Tous les utilisateurs ont été ajoutés, descendez tout en bas et chargez un maximum de personne afin d'ajouter plus de monde");
    }else{
        alert('Une erreur est survenue');
    }
}

addAll();