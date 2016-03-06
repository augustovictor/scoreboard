// > MODULES
var _ = require('lodash');

// > ROUTES
module.exports = function(app) {
    _teams = [];

    // CREATE [ POST ]
        app.post('/newTeam', function(req, res) {
            _teams.push(req.body);
            res.json({
                info: 'Team created successfully.'
            });
        });

    // READ [ GET ]
        // ALL
        app.get('/teams', function(req, res) {
            res.send(_teams);
        });

        // SPECIFIC
        app.get('/teams/:id', function(req, res) {
            var team = _.find(_teams, {
                name: req.params.id
            });

            res.send(team);
        });


    // UPDATE [ PUT ]
        app.put('/teams/:id', function(req, res) {
            var index = _.findIndex(_teams, {
                name: req.params.id
            });

            _.merge(_teams[index], req.body);

            res.json({
                info: 'Team ' + req.params.id + ' updated successfully'
            });
        });

    // DELETE [ DELETE ]
        app.delete('/teams/:id', function(req, res) {
            _.remove(_teams, function(team) {
                return team.name === req.params.id
            });

            res.json({
                info: 'Team deleted ' + req.params.id + ' successfully'
            });
        });
}
