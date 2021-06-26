# Enumeration
## nmap
*Nmap is used to discover hosts and services on a computer network by sending packets and analyzing the responses.*  

Standard use:  
`sudo nmap -A -vv -oN IP`  

Resources:  
http://cs.lewisu.edu/~klumpra/camssem2015/nmapcheatsheet1.pdf  
https://highon.coffee/blog/nmap-cheat-sheet/  

## nikto  
*Nikto is a free software command-line vulnerability scanner that scans webservers for dangerous files/CGIs, outdated server software and other problems.*  

Standard use:  
`sudo nikto -h IP`  

Resources:  
https://cdn.comparitech.com/wp-content/uploads/2019/07/NIkto-Cheat-Sheet.pdf  

## Gobuster  
*Gobuster is a scanner that looks for existing or hidden web objects. It works by launching a dictionary attack against a web server and analyzing the response.*  

Standard use:  
`sudo gobuster dir -u URL -w WL -x EXT`

Resources:  
https://linuxcscom.wordpress.com/gobuster/  
https://daronwolff.com/wfuzz-cheatsheet/  

## enum4linux  
*Enum4linux is a tool for enumerating information from Windows and Samba (137, 139, 445) systems. It is written in Perl and is basically a wrapper around the Samba tools smbclient, rpclient, net and nmblookup.*  

Standard use:  
`sudo enum4linux -v -a IP`  

Resources:  
https://highon.coffee/blog/enum4linux-cheat-sheet/  


# Decryption  
## CyberChef
*CyberChef is a simple, intuitive web app for carrying out all manner of “cyber” operations within a web browser. These operations include simple encoding like XOR or Base64, more complex encryption like AES, DES and Blowfish, creating binary and hexdumps, compression and decompression of data, calculating hashes and checksums, IPv6 and X.509 parsing, changing character encodings, and much more.*  
https://gchq.github.io/CyberChef/  

## Hashes.com
*Hashes.com is a hash lookup service (MD5, SHA1, MySQL, NTLM, SHA256, SHA512).*   
https://hashes.com/en/decrypt/hash  

# Bruteforce 
## Hydra  
*Hydra is a parallelized login cracker which supports numerous protocols to attack.*  

Standard use:  
`sudo hydra -f -l USR -P WL IP -t 4 ssh`  

Resources:  
https://noxtal.com/cheatsheets/2020/07/24/hydra-cheatsheet/ 
https://github.com/frizb/Hydra-Cheatsheet  

## John The Ripper  
*John the Ripper is a free password cracking software tool.*  

Standard use:  
`sudo john hash.txt --format=FORMAT --wordlist=WL`  

Resources:  
https://noraj.gitlab.io/the-hacking-trove/Tools/john_the_ripper/  
https://m0053sec.wordpress.com/2020/02/08/using-john-ssh2john-to-crack-a-id_rsa-private-key/  


# Privilege Escalation  
## Unix privesc  
*It tries to find misconfigurations that could allow local unprivilged users to escalate privileges to other users or to access local apps (e.g. databases).*  

http://pentestmonkey.net/tools/audit/unix-privesc-check  

## Linprivchecker  
https://github.com/reider-roque/linpostexp/blob/master/linprivchecker.py  

## Reverse shells  
https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet  

## GTFOBins  
*GTFOBins is a curated list of Unix binaries that can be used to bypass local security restrictions in misconfigured systems.*  
https://gtfobins.github.io/  

## Find SUIDs  
*By using the following command you can enumerate all binaries having SUID permissions.*  
`find / -perm -u=s -type f 2>/dev/null`  