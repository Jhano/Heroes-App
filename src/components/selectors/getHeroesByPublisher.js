import heroes from '../../data/heroes';


const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    //se barre el arreglo
    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publusge "${publisher}" no es correcto`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}

export default getHeroesByPublisher;