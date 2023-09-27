#!/usr/bin/env python3
"""This module uses yield in async function"""
import asyncio
import random


async def async_generator():
    """
    This function create a list with the yield in async form
    """
    for i in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
