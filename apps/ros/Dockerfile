FROM ubuntu22.04

RUN apt install software-properties-common \
    && add-apt-repository universe \
    && apt update && apt install curl -y \
    && curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | tee /etc/apt/sources.list.d/ros2.list > /dev/null \
    && apt install ros-dev-tools \
    && apt update && apt upgrade \
    && apt install ros-rolling-desktop \
    && source /opt/ros/rolling/setup.bash

# apt install ros-rolling-ros-base
