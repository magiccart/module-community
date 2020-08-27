<?php

/**
 * @Author: nguyen
 * @Date:   2020-04-24 09:45:19
 * @Last Modified by:   Alex Dong
 * @Last Modified time: 2020-08-27 22:58:07
 */

namespace Magiccart\Community\Block\Adminhtml\System;

class Feed extends \Magento\Config\Block\System\Config\Form\Field
{


    /**
     * @return string
     */
    public function render(\Magento\Framework\Data\Form\Element\AbstractElement $element)
    {
        try {
    		
      		$html = "
                    <div class='magiccart_feed'></div>
                    <script type='text/javascript'>
                        require(['jquery', 'magiccart/slick', 'magiccart/feed']);
                    </script>
      		";
    		
    		return $html;
    	
		} catch (Exception $e) {
      	
      		return $e->getMessage();
  		}
    }
}
