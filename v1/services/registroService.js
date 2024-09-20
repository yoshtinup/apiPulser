import {db} from '../../database/mysql.js'

export const usuarioService = {

    getAllProducts : async () => {
        const sql = "SELECT * FROM registro";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM registro WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
     
    createNewProduct : async (product) => {
        const sql = "INSERT INTO registro(nombre, apellido, telefono, telefonoTaxi) VALUES (?, ?, ?, ?)";
        const params = [product.nombre, product.apellido, product.telefono, product.telefonotaxi];
        try {
            const [resultado] = await db.query(sql, params);
            return {
                nombre: product.nombre,
                apellido: product.apellido, 
                telefono: product.telefono, 
                telefonotaxi: product.telefonotaxi, 
                id: resultado.insertId
            }
        } catch (error) {
            return null;
        }
    },
    
    
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM registro WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }


}