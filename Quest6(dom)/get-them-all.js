export const getArchitects = () => {
    const tag_a = [...document.getElementsByTagName('a')];

    const all = [...document.querySelectorAll('body *:not(a)')].filter(el => el.tagName === 'SPAN')
    
    return [tag_a, [...all]];

};

export const getClassical = () => {
    const [architict , _ ] = getArchitects();
    const classical = architict.filter(el => el.classList.contains('classical'));
    const not_classical = architict.filter(el => !el.classList.contains('classical'));
    return [classical, [...not_classical]]
};

export const getActive = () => {
    const [classical , _ ] = getClassical();
    const active = classical.filter(el => el.classList.contains('active'));
    const not_classical = classical.filter(el => !el.classList.contains('active'));
    return [active, [...not_classical]]
};

export const getBonannoPisano = () => {
    const BonannoPisano = document.getElementById('BonannoPisano');
    const [architict] = getArchitects();
    const architict_classical = architict.filter(el => el.classList.contains('classical'));
    const active_classical_architict = architict_classical.filter(el => el.classList.contains('active'));
    return [ BonannoPisano , [...active_classical_architict]]
}