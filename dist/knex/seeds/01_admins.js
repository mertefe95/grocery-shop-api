exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('admins')
        .del()
        .then(() => 
    // Inserts seed entries
    knex('admins').insert([
        {
            user_name: 'Mert Admin',
            email: 'efeisikgor@gmail.com',
            password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.',
        }
    ]));
};
//# sourceMappingURL=01_admins.js.map