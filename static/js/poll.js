var pubKey = "pub-c-816e11d4-d8af-4d49-bc41-b05a89c80d64";
var subKey = "sub-c-feed2d7c-f013-11e6-8e1d-02ee2ddab7fe";
var chan = "My-channel";

var pollOptions = {
    eon: {
        "Palm House" : 0.0,
        "La Taqueria" : 0.0,
        "Foreign Cinema" : 0.0,
        "Fino Ristorante" : 0.0,
        "Roam" : 0.0
    }
};

var pb = PUBNUB.init({
    publish_key: pubKey,
    subscribe_key: subKey
});

function myButtons() {
    var buttonColor;
    for(key in pollOptions.eon) {
        var b = document.createElement('BUTTON');
        b.setAttribute('id', 'button' + key);
        b.setAttribute('style', 'left:10%;width:6%;margin-left:4%;margin-top:4%;margin-bottom:5%;background-color:buttonColor;color:white;');
        b.innerHTML = key;
        b.addEventListener("click", voteUp(key));
        document.body.appendChild(b);
    }
}
myButtons();

function oldVotes() {
    pb.history({
        channel: chan,
        count: 1,
        callback: function(msg) {
            console.log("msg is ", msg);
            var voteHistory = msg[0];
            if(voteHistory.length) {
                pollOptions = voteHistory[0];
            }
        },
    });
}

oldVotes();

function publishResults() {
    pb.publish({
        channel: chan,
        message: pollOptions,
        callback: function(m) {
            console.log("publishing");
        }
    });
}

function voteUp(pollOptionKey) {
    return function() {
        console.log(pollOptions);
        pollOptions.eon[pollOptionKey] += 1.0;
        publishResults();
    };
}

function drawChart() {
    eon.chart({
        pubnub: pb,
        channel: chan,
        history: true,
        generate: {
            bindto: '#poll',
            data: {
                labels: true,
                type: 'bar',
                colors: {
                    "Palm House" : "#cc0000",
                    "La Taqueria" : "#336600",
                    "Foreign Cinema" : "#3333ff",
                    "Fino Ristorante" : "#33cccc",
                    "La Mediterranee" : "#993399"
                }
            },
            bar: {
                width: {
                    ratio: 0.5
                }
            }
        },
        tooltip: {
            show: false
        }
    });
}

drawChart();