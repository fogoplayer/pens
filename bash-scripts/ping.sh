# Install fping
if command -v fping >/dev/null;
then
    echo "fping is already installed. Beginning tests:"
else
    sudo apt-get install fping
fi

successArray=()

for i in {0..255}
do
    # Code to display progress bar
    let percent=$i*100/256
    echo -ne "Checking 192.168.86.$i \t $percent% complete\r"    #Update first three IP numbers to match router
    
    # Ping test
    fping 192.168.1.$i -c 1 -t 500 -q 2>/dev/null;
    if [ $? -eq 0 ];
    then
        successArray+=("$i")
    fi
done


# Display output
echo -e "\nSuccessful IPs:"
for i in "${successArray[@]}"
do
    echo "  $i"
done
