FROM nvidia/cuda:12.1.0-devel-ubuntu20.04
LABEL maintainer="HinGwenWong"
ENV REFRESHED_AT=2023-04-18
RUN sed -i s@/archive.ubuntu.com/@/mirrors.aliyun.com/@g /etc/apt/sources.list && \
    apt-get update \
    && rm /etc/apt/sources.list.d/*
# Install requried libraries
RUN apt-get install -y --no-install-recommends \
    libcurl4-openssl-dev \
    wget \
    zlib1g-dev \
    git \
    pkg-config \
    libgl1-mesa-glx \
    python3 \
    python3-pip
# Using douban pip mirror to install
RUN python3 -m pip install --upgrade --force-reinstall pip \
    && pip3 config set global.index-url https://pypi.douban.com/simple/ \
    && pip3 install --no-cache-dir setuptools \
    opencv-contrib-python \
    opencv-python==4.7.0.72 \
    tensorflow==2.12.0 \
    flask \
    easydict \
    mxnet \
    mxnet-cu100 \
    sklearn \
    scikit-image \
    pymysql \
    icecream \
    redis \
    scikit-learn \
    iml \
    DBUtils==1.3 \
    && apt-get remove --yes software-properties-common \
    && apt-get autoremove --yes \
    && apt-get clean \
    && rm -rf /tmp/* /var/lib/apt/lists/* \
    && pip3 list






