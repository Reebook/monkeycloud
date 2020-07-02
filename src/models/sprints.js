'use strict';

const sql = require('../connectionToDB.js');

const sprints = function(argument){
    this.name = argument.name;
};

sprints.create = function(newSprint, result) {
    sql.query('INSERT INTO `monkeysclouddb`.`sprints` SET ?', newSprint, (err, res) => {
            if (err) {
                result(err, null);
                return;
            } else {
                console.log(res.insertId);
                result(null, res.insertId);
                return;
            }
        });

};

sprints.findById = function(idsprint, result){
    sql.query('SELECT * FROM `monkeysclouddb`.`sprints` WHERE `idsprints` = ?', idsprint, (err, res) => {
        if(err){
            result(err, null);
            return;
        } else {
            console.log(res);
            result(null, res[0]);
            return;
        }
    });
}


sprints.update = function(idsprint, result){
    sql.query('UPDATE `monkeysclouddb`.`sprints` SET `monkeysclouddb`.`sprints`.`name`=?   WHERE `monkeysclouddb`.`sprints`.`idsprints` =?', [ idsprint.name, idsprint.idsprints], (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        } else {
            console.log('sprint :', res);
            result(null, res);
            return;
        }
    });

}

sprints.delete = function(idsprint, result){
    sql.query('DELETE FROM `monkeysclouddb`.`languages` WHERE `idlanguage` = ?', [idsprint], (err, res) => {
        if(err){
            console.log('error: ', err);
            result(null, err);
            return;
        } else {
            result(null, res);
            return;
        }

    });

}





module.exports = sprints;