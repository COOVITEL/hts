#!/usr/bin/python3
import logging
import socket

logging.basicConfig(filename='test.log', level=logging.DEBUG,
                    format='%(asctime)s:%(levelname)s:%(message)s:%(funcName)s:%(filename)s')

def add(x, y):
    """Add function"""
    return x + y

def sub(x, y):
    """Sub function"""
    return x - y

def mul(x, y):
    """Mul function"""
    return x * y

def div(x, y):
    """Div function"""
    return x / y

num_1 = 15
num_2 = 22

add_result = add(num_1, num_2)
logging.debug('Add: {} + {} = {}'.format(num_1, num_2, add_result))

sub_result = sub(num_1, num_2)
logging.debug('Sub: {} + {} = {}'.format(num_1, num_2, sub_result))

mul_result = mul(num_1, num_2)
logging.debug('Mul: {} + {} = {}'.format(num_1, num_2, mul_result))

div_result = div(num_1, num_2)
logging.debug('Div: {} + {} = {} : IP={}'.format(num_1, num_2, div_result, socket.gethostbyname(socket.gethostname())))