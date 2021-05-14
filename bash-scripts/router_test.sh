# Install fping
if command -v fping >/dev/null;
then
    echo "fping is already installed";
else
    sudo apt-get install fping;
fi

echo "Beginning tests";

#Run tests
while true; do
    fping google.com -c 1 -t 1000 -q 2>/dev/null;
    
    #If ping is not successful
    if [ $? -ne 0 ];
    then
        #Log and save current time
        now=$(date +"%s");
        echo "Went down         $(date +%T)" >> ~/outage_log.txt;
        
        #Ping every second until it's back up
        fping google.com -c 1 -t 1000 -q 2>/dev/null;
        until [ $? -eq 0 ]
        do
            fping google.com -c 1 -t 1000 -q 2>/dev/null;
        done
        
        #Log a second timestamp and calculate outage duration
        now2=$(date +"%s");
        duration=$(($now2 - $now));
        echo "Back up           $(date +%T)" >> ~/outage_log.txt;
        echo "Total downtime:   $(($duration / 60)) minutes $(($duration % 60)) seconds" >> ~/outage_log.txt;
        echo >> ~/outage_log.txt;
    fi
done