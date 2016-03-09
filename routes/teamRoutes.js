// > MODULES
var _ = require('lodash');
var Team = require('../models/teamModel.js');

// > ROUTES
module.exports = function(app) {

    // CREATE [ POST ]
        app.post('/team', function(req, res) {
            var team = new Team(req.body);
            team.save(function(err) {
                if(err) res.json({ info: 'Error during creating team.', error: err });
                res.json({ info: 'Team created successfully.' });
            });
        });

    // READ [ GET ]
        // ALL
        app.get('/teams', function(req, res) {
            Team.find(function(err, teams) {
                if(err) res.json({ info: 'Error during finding teams.', error: err });
                res.json({ info: 'Teams found successfully.', data: teams });
            });
        });

        // SPECIFIC
        app.get('/teams/:id', function(req, res) {
            Team.findById(req.params.id, function(err, team) {
                if(err) res.json({ info: 'Error during finding team.', error: err });
                if(team) res.json({ info: 'Team found successfully.', data: team });
                else res.json({ info: 'Team not found.' });
            });
        });


    // UPDATE [ PUT ]
        app.put('/teams/:id', function(req, res) {
            Team.findById(req.params.id, function(err, team) {
                if(err) res.json({ info: 'Error during finding team.', error: err });
                if(team) {
                    _.merge(team, req.body);

                    team.save(function(error, team) {
                        if(error) res.json({ info: 'Error during saving team.', error: error });
                        if(team) res.json({ info: 'Team updated successfully.' });
                    });
                }
                else res.json({ info: 'Team not found.' });
            });
        });

    // DELETE [ DELETE ]
        app.delete('/team/:id', function(req, res) {
            Team.findByIdAndRemove(req.params.id, function(err) {
                if(err) res.json({ info: 'Error during finding team.', error: err });
            });
            res.json({ info: 'Team removed successfully.' });
        });
}
