exports.seed = function (knex: any) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() =>
      // Inserts seed entries
      knex('users').insert([
        {
          user_name: 'Customer 1',
          first_name: 'Customer',
          last_name: '1',
          email: 'customer1@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 2',
          first_name: 'Customer',
          last_name: '2',
          email: 'customer2@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 3',
          first_name: 'Customer',
          last_name: '3',
          email: 'customer3@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 4',
          first_name: 'Customer',
          last_name: '4',
          email: 'customer4@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 5',
          first_name: 'Customer',
          last_name: '5',
          email: 'customer5@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 6',
          first_name: 'Customer',
          last_name: '6',
          email: 'customer6@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 7',
          first_name: 'Customer',
          last_name: '7',
          email: 'customer7@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 8',
          first_name: 'Customer',
          last_name: '8',
          email: 'customer8@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 9',
          first_name: 'Customer',
          last_name: '9',
          email: 'customer9@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
        {
          user_name: 'Customer 10',
          first_name: 'Customer',
          last_name: '10',
          email: 'customer10@test.com',
          password: '$2a$10$vnVuUL33oz2PUBLGXGt3Ue70QHFdQ83e.qGuo3JzTCcs/izGPxgJ.', // password: Admin123
        },
      ]),
    );
};
