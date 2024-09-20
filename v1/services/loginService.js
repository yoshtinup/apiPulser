import {db} from '../../database/mysql.js'

export const loginService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM login";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM login WHERE id=?";
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
        const sql = "INSERT INTO login (usuario, contrasena, gmail) VALUES (?, ?, ?)";
        const params = [product.usuario, product.contrasena, product.gmail];
        try {
            const [resultado] = await db.query(sql, params);
            return {
                usuario: product.usuario,
                contrasena: product.contrasena, 
                gmail: product.gmail, 
                id: resultado.insertId
            }
        } catch (error) {
            return null;
        }
    },
    
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM tiendas WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}