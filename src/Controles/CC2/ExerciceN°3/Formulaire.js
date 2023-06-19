import React, { useState } from 'react';

export default function Formulaire() {
    const [dataForm, setDataForm] = useState({
        nom: '',
        email: '',
        sexe: '',
        pays: '',
        domaines: [],
    });

    const [info, setInfo] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setDataForm((prev) => {
            if (checked) {
                return {
                    ...prev, [name]: type === 'checkbox' ? [...prev[name], value] : value,
                };
            } else {
                return {
                    ...prev, [name]: type === 'checkbox' ? prev[name].filter((x) => x !== value) : value,
                };
            }
        });
    };

    const displayInfo = (e) => {
        e.preventDefault();
        setInfo(`Nom : ${dataForm.nom} , Email : ${dataForm.email} ,Sexe : ${dataForm.sexe}
            Pays : ${dataForm.pays} , Domaine d'activités : ${dataForm.domaines}`)
    };
    return (
        <fieldset>
            <legend>Formulaire d'inscription</legend>
            <form onSubmit={displayInfo}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="nom">Nom</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="nom"
                                    value={dataForm.nom}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="email">Email</label>
                            </td>
                            <td>
                                <input
                                    type="email"
                                    name="email"
                                    value={dataForm.email}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="sexe">Sexe</label>
                            </td>
                            <td>
                                Masculin :
                                <input
                                    type="radio"
                                    name="sexe"
                                    value="Homme"
                                    checked={dataForm.sexe === 'Homme'}
                                    onChange={handleChange}
                                />
                                Féminin :
                                <input
                                    type="radio"
                                    name="sexe"
                                    value="Femme"
                                    checked={dataForm.sexe === 'Femme'}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="pays">Pays</label>
                            </td>
                            <td>
                                <select name="pays" value={dataForm.pays} onChange={handleChange}>
                                    <option value="">Sélectionnez un pays</option>
                                    <option value="France">France</option>
                                    <option value="Maroc">Maroc</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="domaines">Domaines d'activités</label>
                            </td>
                            <td>
                                <input
                                    type="checkbox"
                                    name="domaines"
                                    value="Informatique"
                                    checked={dataForm.domaines.includes('Informatique')}
                                    onChange={handleChange}
                                />{' '}
                                Informatiques
                                <input
                                    type="checkbox"
                                    name="domaines"
                                    value="Gestion"
                                    checked={dataForm.domaines.includes('Gestion')}
                                    onChange={handleChange}
                                />{' '}
                                Gestion
                                <input
                                    type="checkbox"
                                    name="domaines"
                                    value="Pedagogie"
                                    checked={dataForm.domaines.includes('Pedagogie')}
                                    onChange={handleChange}
                                />{' '}
                                Pédagogie
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="submit" value="Envoyer" />
                                <input type="reset" value="Annuler" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <p>{info}</p>
        </fieldset>
    );
}
