const MysqlLib = require('../lib/mysql');

class CursoService{

    constructor(){
        this.sql = new MysqlLib();
    }

    async getAll(){
        const sqlAll = "select curso_id,curso_nombre from tbl_curso";
        const result = await this.sql.querySql(sqlAll);
        return result;
    }

    async create({curso}){
        const sqlCreate = `insert into tbl_curso(curso_nombre) 
                          values ('${curso.nombre}')`;

        await this.sql.querySql(sqlCreate);
        const sqlCursoCreado = "select * from tbl_curso order by curso_id desc limit 1";
        const result = await this.sql.querySql(sqlCursoCreado);
        return result;
    }

    async getById(id){
        const sqlGetById = `select * from tbl_curso where curso_id = ${id}`;
        const result = await this.sql.querySql(sqlGetById);
        return result;
    }

    async update({data,id}){
        const sqlUpdate = `update tbl_curso set
                          curso_nombre = '${data.nombre}'
                          where curso_id = '${id}'
                          `;

        await this.sql.querySql(sqlUpdate);
        const sqlCursoActualizado = `select * from tbl_curso where curso_id = '${id}'`;
        const result = await this.sql.querySql(sqlCursoActualizado);
        return result;
    }

    async delete(id){
        const sqlDeleteCurso = `delete from tbl_curso where curso_id = '${id}'`;
        await this.sql.querySql(sqlDeleteCurso);
        return true;
    }


}

module.exports = CursoService;