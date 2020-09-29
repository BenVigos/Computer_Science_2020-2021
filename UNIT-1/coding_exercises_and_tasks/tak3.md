# This is the third task

## Questions:

### Question 1
1. Opperating systems are responsible for loading and running computer's basic programs, they're the first thing that opens 
1. Opperating systems help computers communicate with their peripherals.
1. (Virtual and protected memory) They simplify memory allocation using something called dynaminc memory allocation, which means they make the computer think that the memory allocated is one continuous block and always starts from 0. This simplifies everything and gives the ability to the operating system to run multiple programs at once.
1. Operating systems can also handle multiple users, using terminals, keyboards and screens connected to computers but that don't have any processing power themselves. By implementing time-sharing it ment that one user couldn't use a computer's full power, rather the power was shared between all users.

### Ouestion 2
I found the fact about the punch hole cards very interesting. I didn't know that programs were written on cards which were then fed into the computer.

### Questions 3
  Not all Windows operating systems were succesful, it seems that every other operating system is more succesful than the ones before, but the one's in the middle never surpass the others. For example Windows XP holds 82% of the market share in 2007 which is when Windows Vista is released, but Vista never surpasses XP, Windows XP stays first until Windows 7 comes out, which then surpasses Windows XP. The same thing can be seen with Windows 7, 8 and 10. 
  Mac OS has an increase, but overall a way smaller number than I woul've expected and Linux stays very consistant with around 5-6%, it seems to have a very small trend upwards.
  
### Question 4
All Windows OS's: Microsoft (the company was so big that the OS's weren't created by one single person, or information is just not stated anywhere on the web)
Mac OS: Steve Jobs [1]
Linux: Linus Torvalds [2] 

[1] “MacOS.” Wikipedia, Wikimedia Foundation, 27 Sept. 2020, en.wikipedia.org/wiki/MacOS.
[2] Torvalds, Linus. LINUX's History by Linus Torvalds, www.cs.cmu.edu/~awb/linux.history.html. 

### Question 5 
(Linux has GNOME as it's GUI)
Red hat: Mostly used for automation, cloud, storage and app development. It's minimum system requirements are, 6GB free disk space and 2GB RAM

CentOS: Mostly used for similar applications as Red hat, app development and system administration. It's minimum system requirements are, 2 GB RAM, 2 GHz or Higher Processor, 20 GB Hard Disk, 64-bit x86 System.

SUSE: Mostly used for servers, mainframes and workstations. It's minimum system requirements are, Pentium 4 1.6 GHz or higher processor (Pentium 4 2.4 GHz or higher or any AMD64 or Intel64 processor recommended), 1 GB physical RAM (at least 1.5 GB when using online repos, 2 GB recommended), 10 GB available disk space for a minimal install, 16 GB available for a graphical desktop (40 GB or more recommended).

Linux Mint: Mostly used for home applications because it's easy to use and ready to roll. It's minimum system requirements are, x86 processor, 512 MB RAM (1GB recommended for a comfortable usage), 5 GB of disk space (20GB recommended), Graphics card capable of 800×600 resolution (1024×768 recommended), DVD drive or USB port.

Fedora: Mostly used for home applications because it's reliable, easy to use and powerful. It's minimum system requirements are, 1GHz Processor (Recommended 2 GHz Dual Core processor), 2 GB RAM, 15 GB unallocated Hard Disk, Bootable Media (USB / DVD)

Knoppix: Mostly used to copy files easily from hard drives with inaccessible operating systems. It's minimum system requirements are, Intel/AMD-compatible processor (i486 or later), 1 GB RAM, Bootable optical drive, Standard SVGA-compatible graphics card, Serial or PS/2 standard mouse or an IMPS/2-compatible USB-mouse.

Manjaro: Mostly used for home applications, it's very user friendly so it's suitable for newcomers. It's minimum system requirements are, 1 GB RAM, 1 GHz Processor, 30 GB free hard disk size, Bootable media ( ISO, DVD &s USB drive).

Kali: Most commonly used for hacking and system penetration. It's minimum system requirements are, 20 GB of hard disk space, SSD preferred, at least 2048 MB of RAM.

## Tasks:

### Task 1
```.py
#This program prints n terms of the fibonacci sequence

n=int(input("Enter pos int "))
fibi, fibimin1, fibtemp = 1, 1, 0
print(1)

for i in range (n-1):
    print(fibi)
    fibtemp=fibi
    fibi+=fibimin1
    fibimin1=fibtemp
```

### HL Task
