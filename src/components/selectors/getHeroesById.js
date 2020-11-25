import heroes from '../../data/heroes';


const getHeroesById = (id) => {


    //apenas encuentre uno lo retorna
    return heroes.find(hero => hero.id === id);

}

export default getHeroesById;