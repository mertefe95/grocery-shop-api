exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('dashboardaccount')
        .del()
        .then(() => 
    // Inserts seed entries
    knex('dashboardaccount').insert([
        {
            user_name: 'Super Admin Byte24',
            email: 'info@byte24.nl',
            password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.',
            is_super_admin: true,
        },
        {
            user_name: 'Sales Manager Byte24',
            email: 'info2@byte24.nl',
            password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.',
            is_sales_manager: true,
        },
    ]));
};
//# sourceMappingURL=03_reviews.js.map